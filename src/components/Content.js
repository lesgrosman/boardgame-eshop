import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GameCard from './GameCard'
import { getData } from '../store/actions'
import { sortByRating } from '../sorting/sortFramework'

const useStyles = makeStyles({
  container: {
    paddingTop: '30px'
  }
});

const Content = () => {
  const classes = useStyles()
  const games = useSelector(state => state.games)
  const dispatch = useDispatch()

  useEffect(() => {
    let isCancelled = false
    dispatch(getData(isCancelled))
    return () => {
      isCancelled = true
    }
  }, [])
  
  const  renderGameCards = (gamesObj) => {
    return sortByRating(Object.keys(gamesObj), gamesObj).map((key) => {
      const { id, name, price, description, imageUrl, rating } = gamesObj[key]
      return (
        <Grid key={id} item xs={12} sm={6} md={4}>
          <GameCard
            title={name}
            price={price}
            descr={description}
            url={imageUrl}
            vote={+rating}
            id={id}
          />
        </Grid>
      )
    })
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      {games ? renderGameCards(games): null}
    </Grid>
  )
}

export default Content