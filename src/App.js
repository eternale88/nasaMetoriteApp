import React from 'react'
import './App.css'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import { MeteorTable } from './components/MeteorTable'
import { Header } from './components/Header'
import Favorites from './components/Favorites'
import Snackbar from '@material-ui/core/Snackbar';
import { useGlobalContext } from './context';

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

const App = () => {
    const { loading, favorites, open} = useGlobalContext()

    const classes = useStyles()
      return (
        <Grid container spacing={1} style={{margin: '3rem auto', justifyContent: 'center'}}  >
          <Header/>
          <section style={{ display: 'flex', justifyContent: 'center', height: 500, width: '100%', marginRight: '3rem', marginLeft: '3rem', marginTop: '3rem'}} className="tableSection">
          {/*Favorites table */}
          {
                favorites.length > 0 &&  !loading &&
                <Grid item xs={12} sm={6}   style={{ marginTop: '0', paddingTop: '0'}} className="favorites" >
                  <Favorites  className={classes.root}/>
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
                  {loading ? 'Loading' :<MeteorTable  />}
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