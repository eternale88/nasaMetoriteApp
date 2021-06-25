export const HeaderContent = 'Nasa Meteorite Data Visualizer'
export const SubHeaderContent = '(Filter by any field by clicking the ellipse in the column header)'
export const TaglineContent = '(Click a row to add to your favorites list so you can dig into the data)'
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