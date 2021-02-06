import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Boardgames</Typography>
        <DashboardIcon/>
      </Toolbar>
    </AppBar>
  )
}

export default Header