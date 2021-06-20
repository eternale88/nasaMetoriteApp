import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
//import data from './data'
import {Grid} from '@material-ui/core'
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import axios from 'axios'



const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'id', headerName: 'id', width: 150 },
  { field: 'nametype', headerName: 'NameType', width: 150 },
  { field: 'recclass', headerName: 'RecClass', width: 150 },
  { field: 'mass', headerName: 'Mass(in grams)', width: 150 },
  { field: 'fall', headerName: 'Fall', width: 150 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'reclat', headerName: 'Latitude', width: 150 },
  { field: 'reclong', headerName: 'Longitude', width: 150 },
  { field: 'geolocation', headerName: 'GeoLocation(lat and long)', width: 150 },
];
function App() {
  const NASA_METEOR_API_ENDPOINT = 'https://data.nasa.gov/resource/gh4g-9sfh.json'
//store state in hooks
const [loading, setLoading] = useState(true)
const [meteorData, setMeteorData] = useState([])

const fetchMeteorData = async () => {
  setLoading(true)
  const response = await axios(NASA_METEOR_API_ENDPOINT).catch(err => console.log(err))
  //const data = await response.json()
  //console.log(response.data[0])
  if(response.data) {
    // setLoading(false)
     //const editedData = response.data.map((item) => {
       //console.log(item.geolocation.latitude)
      //  return item.geolocation = `${item.geolocation.coordinates[0]} ${item.geolocation.coordinates[1]}`
     //})
     const examp = response.data.map((value)=> {
       console.log(value)
       let latAndLong = ''
       for (let geo in value.geolocation) {
        console.log(geo)
        latAndLong += `${value.geolocation[geo]} `
       }
  console.log(latAndLong)
      value.geolocation = latAndLong
      //return value
   })
   console.log(examp)
     //console.log(editedData)
    //  const remapOfGeolocation = response.data.map((item) => {
       
    //    if(item) {
    //      item.geoLocation = `${item.latitude} ${item.longitude}`
    //      //geoLocationObj = `${latitude} ${longitude}`
    //    }
    //    return {item}
    //  })
    setMeteorData(response.data)
  }
}
useEffect(() => {
  fetchMeteorData()

}, [])
  return (
    <Grid container  >
    <Grid item xs={12}>
      <section style={{ height: 500, width: '80%' , margin: '0 auto'}}>
          <DataGrid rows={meteorData} columns={columns} pageSize={12} />
      </section>
    </Grid>
      
    </Grid>
    
  );
}

export default App;
