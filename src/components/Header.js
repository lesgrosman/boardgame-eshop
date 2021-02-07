import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.typographyStyles}>
        <Button color="inherit" component={Link} to={'/'}>Main Page</Button>
        <Button color="inherit" component={Link} to={'/add'}>Add boardgame</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header