import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  Grid,
  Typography
} from '@material-ui/core'
import Header from './cpn/Header'
import DrawerMenu from './cpn/Drawer'
import Layout from './cpn/Layout'
import indexRoute from './routes/index'
import info from './assets/jss/info'



class App extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: '#27AAE0',
        flexGrow: 1,
        zIndex: 1,
        height:'fit-content',
        minHeight:'100vh',
        paddingBottom:30,
        overflow: 'scrollY',
        position: 'relative',
        display: 'flex',
        width: '100%',
      }}>
        <Grid container justify='center' alignContent='flex-start'>
          <Grid item xs={12} style={{
            display: 'flex',
            padding: 50,
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img src={`${info.mediaURL}/logo.webp`}
              href='/'
              style={{
                height: 83,
                width: 'auto'
              }}
            />
            <Typography
              align="center"
              variant="display1"
              color="inherit"
            >
              Learn English Online For Everyone
            </Typography>
          </Grid>
          <Grid xs={12} lg={8}>
              <Layout/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
