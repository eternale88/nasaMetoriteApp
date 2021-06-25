import React from 'react'
import { DataGrid } from '@material-ui/data-grid'

export const MeteorTable = ({meteorData, columns, onRowSelected}) => {
	return (
		<DataGrid checkboxSelection style={{marginLeft: '3rem'}}  rows={meteorData} columns={columns} pageSize={25} onRowSelected={(e) => onRowSelected(e)} />
	)
}

