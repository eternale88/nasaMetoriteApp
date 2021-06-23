import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

export const MeteorTable = ({meteorData, columns, onRowSelected, loading}) => {
	return (
		<DataGrid checkboxSelection style={{marginLeft: '3rem'}} loading={loading} rows={meteorData} columns={columns} pageSize={25} onRowSelected={(e) => onRowSelected(e)} />
	)
}

