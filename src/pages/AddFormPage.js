import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import FileInput from '../components/formComponents/FileInput'
import Input from '../components/formComponents/Input'
import SubmitBtn from '../components/formComponents/SubmitBtn'
import { pushData } from '../services'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center'
  }
}));

const AddFormPage = () => {
  const classes = useStyles()
  const {register, handleSubmit, errors, control} = useForm()
  const history = useHistory()

  const onSubmit = (data, e) => {
    const {title, price, rating, description} = data
    e.target.reset()

    pushData(title, price, rating, description)
    history.push('/')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add new boardgame
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit((data, e)=> onSubmit(data, e))}>
          <Input
            ref={register({required: true})}
            name="title"
            label="Game title"
          />
          <Input
            ref={register({required: true})}
            name="price"
            label="Game price"
            type="number"
          />
          <Input
            ref={register({required: true})}
            name="rating"
            label="Game rating"
            type="number"
          />
          <Input
            ref={register({required: true})}
            name="description"
            label="Game description"
          />
          <FileInput name="files" control={control}/>
          <SubmitBtn />
          {
            Object.keys(errors).length > 0  
            && <Typography className={classes.errorMessage}>
                All fields are required
              </Typography>
          }
        </form>
      </div>
    </Container>
  )
}

export default AddFormPage