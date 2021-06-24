import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
//import data from './data'
import {Grid, Tooltip} from '@material-ui/core'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import axios from 'axios'
import { MeteorTable } from './components/MeteorTable'

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

//test rows
// const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'XGrid', col2: 'is Awesome' },
//   { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
// ];
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   fab: {
//     margin: theme.spacing(2),
//   },
//   absolute: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(3),
//   },
// }));
//in component 
//  const classes = useStyles();
// className={classes.fab} or absolute etc.

export const columns = [
  { field: 'name', headerName: 'Name',headerClassName: 'super-app-theme--header',
  width: 150 },
  { field: 'id', headerName: 'id', width: 150 },
  { field: 'nametype', headerName: 'NameType', width: 150 },
  { field: 'recclass', headerName: 'RecClass', width: 150 },
  { field: 'mass', headerName: 'Mass(in grams)', width: 150 },
  { field: 'fall', headerName: 'Fall', width: 150 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'reclat', headerName: 'Latitude', width: 150 },
  { field: 'reclong', headerName: 'Longitude', width: 150 },
  { field: 'geolocation', headerName: 'GeoLocation(latitude and longitude)', width: 150 }
]

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
    <Grid container spacing={1}  >
      <Grid item xs={8} md={12} className={classes.roots}>
        <Card style={{marginRight: '3rem', marginLeft: '3rem'}}>
          <CardContent>
            <h1 style={{textAlign: 'center'}}>Nasa Meteorite Data</h1>
            <h4 style={{textAlign: 'center'}}>(Filter by any field by clicking the ellipse in the column header)</h4>
            <h4 style={{textAlign: 'center'}}>(Click a row to add to your favorites list to gdig into the data)</h4>
          </CardContent>
        </Card>
      </Grid>

        <section style={{ display: 'flex', justifyContent: 'center', height: 500, width: '80%' , margin: '5rem auto'}} className="tableSection">
      {/*Favorites table */}
            {favorites.length > 0 && 
              <Grid item xs={12} sm={6}   style={{ marginTop: '0', paddingTop: '0'}} className="favorites">
              {/*<h4 style={{marginTop: '0', paddingTop: '0', position:'absolute', left: '200px', bottom: '0px'}}>Favorites List</h4>*/}
                <DataGrid className={classes.root} rows={favorites} columns={columns} pageSize={25}/>
              </Grid>}
      {/*Meteor Data table */}
              {/* <DataGrid style={{marginLeft: '3rem'}} loading={loading} rows={meteorData} columns={columns} pageSize={25} onRowSelected={(e) => onRowSelection(e)} /> */}
              <Grid item xs={12} sm={6} className={classes.root}>
              {loading ? 'Loading' :<MeteorTable  meteorData={meteorData} columns={columns} loaded={loading} onRowSelected={onRowSelection}/>}
              </Grid>
        </section>
        
    </Grid>
    
  );
}

export default App;
