import React, {useContext} from 'react'
import { AuthContext } from '../components/auth/AuthContext'
import { app } from '../firebase'
import { AppBar, Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex'
  }
}))

const Header = () => {
  const classes = useStyles()
  const {currentUser} = useContext(AuthContext)

  const setButtons = () => {
    if (currentUser) {
      return (
        <>
          <Button 
          color="inherit" component={Link} to="/add">Add boardgame</Button>
          <Button color="inherit" component={Link} to="/" onClick={() => app.auth().signOut()}>Log out</Button>
        </>
      )
    }
    return (
      <>
        <Button color="inherit" component={Link} to={'/auth'}>Authorization</Button>
        <Button color="inherit" component={Link} to={'/login'}>Log in</Button>
      </>
    )
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.typographyStyles}>
        <Button color="inherit" component={Link} to={'/'}>Main Page</Button>
        <div className={classes.buttons}>
          {setButtons()}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header