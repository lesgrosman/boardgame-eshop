import React from 'react'
import { useSelector } from 'react-redux'
import { removeGame } from '../services'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    margin: 'auto'
  },
  title: {
    fontSize: 14,
  },
  buttonStyle: {
    color: 'blue',
    fontWeight: 'bold'
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  voteStyle: {
    backgroundColor: vote => vote < 5 ? 'red': vote > 7 ? 'green': 'grey'
  },
  delete: {
    color: 'red'
  }
});

const GameCard = ({id, title, price, descr, url, vote }) => {
  const classes = useStyles(vote);
  const removeMode = useSelector(state => state.removeMode)

  return (
    <Card variant="outlined">
      <CardHeader
        classes={{
          title: classes.name
        }}
        avatar={
          <Avatar className={classes.voteStyle}>
            {vote}
          </Avatar>
        }
        action={
          removeMode
          ? <IconButton aria-label="settings" onClick={() => removeGame(title, id)}>
              <DeleteIcon color="error"/>
            </IconButton> 
          : <IconButton aria-label="settings" >
              <ShareIcon />
            </IconButton>
        }
        title={title}
        subheader={`$ ${price}`}
      />
      <CardMedia
        className={classes.media}
        image={url}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {descr}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.buttonStyle} size="small">Learn More</Button>
        <Button className={classes.buttonStyle} size="small">Buy</Button>
      </CardActions>
    </Card>
  )
}

export default GameCard