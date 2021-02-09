import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { app } from '../firebase'
import { AuthContext } from '../components/auth/AuthContext'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red'
  }
}))

const LoginPage = () => {
  const classes = useStyles()
  const {register, handleSubmit, errors} = useForm()
  const history = useHistory()

  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    const {email, password} = data
    try {
      await app.auth().signInWithEmailAndPassword(email, password)
      history.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const {currentUser} = useContext(AuthContext)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit((data)=> onSubmit(data))}>
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {
            error 
            ? <Typography className={classes.errorMessage}>
                {error}
              </Typography>
            : null
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default LoginPage