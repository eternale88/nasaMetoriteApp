import React from 'react'
//import '../App.css'
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from '@material-ui/data-grid'

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

//store in state var in context for insertion here
const Favorites = ({favorites, columns, deleteMeteor}) => {
	const classes = useStyles()

	return (
		<DataGrid checkboxSelection className={classes.root} rows={favorites} columns={columns} pageSize={25} />
	)
}

export default Favorites

Favorites.propTypes = {
	DataGrid: PropTypes.element,
	favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
	columns: PropTypes.arrayOf(PropTypes.object).isRequired
}