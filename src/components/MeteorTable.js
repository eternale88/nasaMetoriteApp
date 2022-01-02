import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context';
import { columns } from '../Constants/Constant'

//store these 3 in a state variable in context, can call here for use
export const MeteorTable = () => {
	const { meteorData, onRowSelection} = useGlobalContext()

	return (
		<DataGrid checkboxSelection style={{marginLeft: '3rem'}}  rows={meteorData} columns={columns}  pageSize={25} onRowSelected={(e) => onRowSelection(e)} />
	)
}

MeteorTable.propTypes = {
	meteorData: PropTypes.array,
	columns: PropTypes.arrayOf(PropTypes.object),
	onRowSelected: PropTypes.func,
	rows: PropTypes.arrayOf(PropTypes.object),
	DataGrid: PropTypes.element,
}
