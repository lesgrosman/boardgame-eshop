import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard'
import gamesList from '../constants'

const useStyles = makeStyles({
  container: {
    paddingTop: '30px'
  }
});

const Content = () => {
  const classes = useStyles()

  const  renderGameCards = (games) => {
    return games.map(game => {
      const { id, title, price, description, image, vote } = game
      return (
        <Grid id={id} item xs={12} sm={6} md={4}>
          <GameCard
            title={title}
            price={price}
            descr={description}
            poster={image}
            vote={vote}
          />
        </Grid>
      )
    })
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      {renderGameCards(gamesList)}
    </Grid>
  )
}

export default Content