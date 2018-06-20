import React, { Component } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import Header from '../../components/Header'
import DrawerMenu from '../../components/DrawerMenu'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1E1E1E',
      main: '#1E1E1E',
      dark: '#1E1E1E',
      contrastText: '#FFFFFF',
    },
  },
});

export default class Home extends Component {
  openMenu() {
    this.refs.drawer.open()
  }
  render() {
    return (
      <div
      tabIndex={0}
      >
      <MuiThemeProvider 
       theme={theme}
      >
          <Header
            title="Home"
            parent={this}
          />
          <DrawerMenu ref={'drawer'} />
      </MuiThemeProvider>
      </div>
    )
  }
}
