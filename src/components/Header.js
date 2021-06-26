import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Grid } from '@material-ui/core'
import {HeaderContent, SubHeaderContent, TaglineContent} from '../Constants/Constant'
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from 'prop-types';


//apply some custom colors
const useStyles = makeStyles({
  root: {
    '& .MuiDataGrid-columnHeaderWrapper': {
      backgroundColor: 'rgb(134 137 243 / 55%)',
    }  
  }
})


export const Header = () => {
	const classes = useStyles()

	return (
		<Grid item xs={8} md={12} >
		<Card style={{marginRight: '3rem', marginLeft: '3rem'}} className={classes.root}>
			<CardContent>
				<h1 style={{textAlign: 'center'}}>{HeaderContent}</h1>
				<h4 style={{textAlign: 'center'}}>{SubHeaderContent}</h4>
				<h4 style={{textAlign: 'center'}}>{TaglineContent}</h4>
			</CardContent>
		</Card>
	</Grid>
	)
}

Header.propTypes = {
	HeaderContent: PropTypes.string,
	SubHeaderContent: PropTypes.string,
	TaglineContent: PropTypes.string
}


