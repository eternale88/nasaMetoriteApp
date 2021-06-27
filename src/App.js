import React, {useState, useEffect} from 'react'
import './App.css'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import axios from 'axios'
import { MeteorTable } from './components/MeteorTable'
import { Header } from './components/Header'
import { columns, NASA_METEOR_API_ENDPOINT } from './Constants/Constant'
import Favorites from './components/Favorites'
import Snackbar from '@material-ui/core/Snackbar';


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
//store state in hooks
const [loading, setLoading] = useState(true)
const [meteorData, setMeteorData] = useState([])
const [favorites, setFavorites] = useState(getFavsFromLocalStorage())
const [open, setOpen] = React.useState(false);

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

//display data from api call on page load
useEffect(() => {
  fetchMeteorData()
}, [])

//fetch favs from local storage on page load, and everytime state is updated
useEffect(() => {
  localStorage.setItem('favoritesMeteors', JSON.stringify(favorites))
  
}, [favorites])

const classes = useStyles()
  return (
    <Grid container spacing={1} style={{margin: '3rem auto', justifyContent: 'center'}}  >
      <Header/>
      <section style={{ display: 'flex', justifyContent: 'center', height: 500, width: '100%', marginRight: '3rem', marginLeft: '3rem', marginTop: '3rem'}} className="tableSection">
      {/*Favorites table */}
      {
            favorites.length > 0 &&  !loading &&
            <Grid item xs={12} sm={6}   style={{ marginTop: '0', paddingTop: '0'}} className="favorites" >
              <Favorites  favorites={favorites} columns={columns}  className={classes.root}/>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={open}
                message="Meteor added!"
              />
            </Grid>
            
         
            
      }
      {/*Meteor Data table */}
              <Grid item xs={12} sm={6} className={classes.root} data-testid="add-favorite">
              {loading ? 'Loading' :<MeteorTable 
              meteorData={meteorData} columns={columns} loaded={loading} onRowSelected={onRowSelection}/>}
              </Grid>
        </section>
    </Grid> 
  )
}

export default App;


App.propTypes = {
  loading: PropTypes.bool,
  meteorData: PropTypes.array,
  favorites: PropTypes.arrayOf(PropTypes.object),
	columns: PropTypes.arrayOf(PropTypes.object)
}