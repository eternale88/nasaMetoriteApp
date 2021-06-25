import React, {useState, useEffect} from 'react'
import './App.css'
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'
import { MeteorTable } from './components/MeteorTable'
import { Header } from './components/Header'
import { columns } from './Constants/Constant'

const getFavsFromLocalStorage = () => {
  let favs = localStorage.getItem('favoritesMeteors')
  if(favs) {
    return JSON.parse(localStorage.getItem('favoritesMeteors'))
  } else {
    return []
  }
}

//apply some custom colors
const useStyles = makeStyles({
  root: {
    '& .MuiDataGrid-columnHeaderWrapper': {
      backgroundColor: 'rgb(134 137 243 / 55%)',
    },
    '& .MuiDataGrid-root': {
      backgroundColor: '#d7eef9',
    } 
  }
});


function App() {
  const NASA_METEOR_API_ENDPOINT = 'https://data.nasa.gov/resource/gh4g-9sfh.json'
//store state in hooks
const [loading, setLoading] = useState(true)
const [meteorData, setMeteorData] = useState([])
const [favorites, setFavorites] = useState(getFavsFromLocalStorage())

const onRowSelection = (e) => {
  console.log(e.data)

  if(!favorites.length) {
    setFavorites([...favorites, e.data])
  } 
  //check if list is not empty and wether the record with specific id has not been added yet
  if(favorites.length > 0 && !favorites.some(fav => fav.id === e.data.id)) {
    setFavorites([...favorites, e.data])
  }
}


const fetchMeteorData = async () => {
  setLoading(true)
  try {
    const response = await axios(NASA_METEOR_API_ENDPOINT)
    if(response.data) {
   
      //response.data.year = new Date(response.data.year)
      //geolocation field is nested object, so need to map to access the to prop else it will display [object object in Dom]
      response.data.map((value) => {
        value.year = new Date(value.year).toLocaleDateString('en-US', {
         month: 'long',
         day: '2-digit',
         year: 'numeric',
         //hour: '2-digit'
       })
        console.log(value)
        let latAndLong = ''
        for (let geo in value.geolocation) {
         console.log(geo)
         latAndLong += `(${value.geolocation[geo]}) `
        }
       value.geolocation = latAndLong
       // for (let val in value) {
       //   value.description = val[value]
 
       // }
    })
     setMeteorData(response.data)
     setLoading(false)
   }
    

  } catch (error) {
    return error
  }
}

//display data on page load
useEffect(() => {
  fetchMeteorData()
}, [])

//fetch favs from local storage on page load, and everytime state is updated
useEffect(() => {
  localStorage.setItem('favoritesMeteors', JSON.stringify(favorites))
  
}, [favorites])

const classes = useStyles()
  return (
    <Grid container spacing={1} style={{margin: '3rem auto'}} >
      <Header/>
      <section style={{ display: 'flex', justifyContent: 'center', height: 500, width: '100%', marginRight: '3rem', marginLeft: '3rem', marginTop: '3rem'}} className="tableSection">
      {/*Favorites table */}
      {
            favorites.length > 0 &&  !loading &&
              <Grid item xs={12} sm={6}   style={{ marginTop: '0', paddingTop: '0'}} className="favorites">
                <DataGrid className={classes.root} rows={favorites} columns={columns} pageSize={25}/>
              </Grid>
            
      }
      {/*Meteor Data table */}
              <Grid item xs={12} sm={6} className={classes.root}>
              {loading ? 'Loading' :<MeteorTable  meteorData={meteorData} columns={columns} loaded={loading} onRowSelected={onRowSelection}/>}
              </Grid>
        </section>
    </Grid> 
  )
}

export default App;
