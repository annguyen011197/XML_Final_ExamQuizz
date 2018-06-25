import React, { Component } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import Header from '../../components/Header'
import DrawerMenu from '../../components/DrawerMenu'
import ExamContent from '../../components/ExamContent'

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



export default class Exam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerHeight: 0,
      style: {
        content: {
          paddingTop: 0,
          marginLeft: 0,
          marginRight: 0
        }
      }
    }

  }

  updateDimension(){
    let width = window.innerWidth
    let headerHeight = document.getElementById('header').clientHeight
    console.log(width)
    if(width>768){
      this.setState(prev=>({
        style:{
          content:{
            marginLeft: 100,
            marginRight: 100,
            paddingTop: headerHeight+10
          }
        }
      }))
    }else{
      this.setState(prev=>({
        style:{
          content:{
            marginLeft: 0,
            marginRight: 0,
            paddingTop: headerHeight+10
          }
        }
      }))
    }
  }

  componentWillMount(){
    window.removeEventListener("resize", this.updateDimension.bind(this));
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimension.bind(this));
    this.updateDimension()
  }
  openMenu() {
    this.refs.drawer.open()
  }
  render() {
    return (
      <MuiThemeProvider
        theme={theme}
      >
        <Header
          title="english4u"
          parent={this}
          ref='header'
          id='header'
        />

        <DrawerMenu ref={'drawer'} />
        <div
          style={this.state.style.content}
        >
          <ExamContent

            ref='content'
          />
        </div>

      </MuiThemeProvider>
    )
  }
}
