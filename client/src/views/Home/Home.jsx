import React, { Component } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import Header from '../../components/Header'
import DrawerMenu from '../../components/DrawerMenu'
import HomeContent from '../../components/HomeContent'
import LogIn from '../../components/LogIn' 
import SignUp from '../../components/SignUp'                  
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#82f7ff',
      main: '#40c4ff',
      dark: '#0094cc',
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
  openLogIn() {
    this.refs.login.open()
  }
  openSignUp() {
    this.refs.signup.open()
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
            title="english4u"
            parent={this}
          />
          <DrawerMenu ref={'drawer'} />
          <LogIn ref= {'login'} name="Sign In"/>
          <SignUp ref= {'signup'} name="Sign Up"/>
          <HomeContent />
          
      </MuiThemeProvider>
      </div>
    )
  }
}
