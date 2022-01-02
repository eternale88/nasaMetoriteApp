import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';


 import { NASA_METEOR_API_ENDPOINT } from './Constants/Constant'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

	const getFavsFromLocalStorage = () => {
		let favs = localStorage.getItem('favoritesMeteors')
		if(favs) {
			return JSON.parse(localStorage.getItem('favoritesMeteors'))
		} else {
			return []
		}
	}
		const [loading, setLoading] = useState(true)
		const [meteorData, setMeteorData] = useState([])
		const [favorites, setFavorites] = useState(getFavsFromLocalStorage())
		const [open, setOpen] = React.useState(false);

		

		const fetchMeteorData = async () => {
			setLoading(true)
			try {
				const response = await axios(NASA_METEOR_API_ENDPOINT)
				if(response.data) {
					//response.data.year = new Date(response.data.year)
					//geolocation field is nested object, so need to map to access the to prop else it will display [object object in Dom]
					response.data.forEach((value) => {
						value.year = new Date(value.year).toLocaleDateString('en-US', {
						month: 'long',
						day: '2-digit',
						year: 'numeric'
					})
						//console.log(value)
						let latAndLong = ''
						for (let geo in value.geolocation) {
						//console.log(geo)
						latAndLong += `(${value.geolocation[geo]}) `
						}
					value.geolocation = latAndLong
				})
				setMeteorData(response.data)
				setLoading(false)
			}
				

			} catch (error) {
				return error
			}
		}

		const alertItemAdded = () => {
			setOpen(true);
			setTimeout(function(){ setOpen(false); }, 3000);
		}

		const onRowSelection = (e) => {
			//console.log(e.data)
		
			if(!favorites.length) {
				setFavorites([...favorites, e.data])
				alertItemAdded()
			} 
			//check if list is not empty and wether the record with specific id has not been added yet
			if(favorites.length > 0 && !favorites.some(fav => fav.id === e.data.id)) {
				setFavorites([...favorites, e.data])
				alertItemAdded()
			}
		}

		//display data from api call on page load
		useEffect(() => {
			fetchMeteorData()
		}, [])

		//fetch favs from local storage on page load, and everytime state is updated
		useEffect(() => {
			localStorage.setItem('favoritesMeteors', JSON.stringify(favorites))
			
		}, [favorites])

		return <AppContext.Provider
			value={{
				loading,
				meteorData,
				favorites,
				onRowSelection,
				open
			}}
		>
			{children}
		</AppContext.Provider>
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
