import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import PropTypes from 'prop-types';

//store these 3 in a state variable in context, can call here for use
export const MeteorTable = ({meteorData, columns, onRowSelected}) => {
	return (
		<DataGrid checkboxSelection style={{marginLeft: '3rem'}}  rows={meteorData} columns={columns}  pageSize={25} onRowSelected={(e) => onRowSelected(e)} />
	)
}

MeteorTable.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object),
	onRowSelected: PropTypes.func,
	rows: PropTypes.arrayOf(PropTypes.object)
}
