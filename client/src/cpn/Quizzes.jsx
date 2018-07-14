import React, { Component } from 'react'
import ShowQuizz from './ShowQuizz'
import {
  Grid,
  Button
} from '@material-ui/core'

export default class Quizzes extends Component {
  render() {
    return (
      <div style={{
        padding:30
      }}>
        <Grid container spacing={24} style={{
          marginTop:30,
        }}>
          <Grid item xs={12} lg={4} md={6}>
          <ShowQuizz/>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
          <ShowQuizz/>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
          <ShowQuizz/>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
          <ShowQuizz/>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
          <ShowQuizz/>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
          <ShowQuizz/>
          </Grid>
        </Grid>
       </div>
    )
  }
}
