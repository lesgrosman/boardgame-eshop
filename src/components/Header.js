import React, {useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AuthContext } from '../components/auth/AuthContext'
import { app } from '../firebase'
import { removeModeToggle } from '../store/actions'
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
  },
  touched: {
    backgroundColor: removeMode => removeMode ? '#0B317C' : '#3f51b5'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px'
  }
}))

const Header = () => {
  const {currentUser} = useContext(AuthContext)
  const removeMode = useSelector(state => state.removeMode)
  const dispatch = useDispatch()
  const classes = useStyles(removeMode)

  const setButtons = () => {
    if (currentUser) {
      return (
        <>
          <Button color="inherit" component={Link} to="/add">Add game</Button>
          <Button 
            color="inherit" 
            className={classes.touched} 
            component={Link} 
            to="/" 
            onClick={() => dispatch(removeModeToggle())}
          >
            Delete game
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            onClick={() => app.auth().signOut()}
            >
              Log out
            </Button>
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
        <Button className={classes.title} color="inherit" component={Link} to={'/'}>E-shop</Button>
        <div className={classes.buttons}>
          {setButtons()}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header