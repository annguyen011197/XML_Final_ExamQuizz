import React, { Component } from 'react'
import {
    MuiThemeProvider
} from '@material-ui/core'
import Header from '../../components/Header'

export default class Exam extends Component {
  render() {
    return (
        <MuiThemeProvider >
        <Header 
        title="Exam"
        />
        Exam    
        </MuiThemeProvider>
    )
  }
}
