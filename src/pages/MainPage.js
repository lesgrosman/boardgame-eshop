import React from 'react'
import { Grid } from '@material-ui/core'
import Content from '../components/Content'

const  MainPage = () => {
  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content/>
        </Grid>
        <Grid item xs={false} sm={2}/>
      </Grid>
    </Grid>
  )
}

export default MainPage
