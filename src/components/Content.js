import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GameCard from './GameCard'
import { database } from '../firebase'


const useStyles = makeStyles({
  container: {
    paddingTop: '30px'
  }
});

const Content = () => {
  const classes = useStyles()
  
  const [games, setGames] = useState(null)

  useEffect(() => {
    const gamesRef = database.ref('games')
    gamesRef.on('value', (snapshot) => {
    setGames(snapshot.val())
    })
  }, [])

  const  renderGameCards = (gamesObj) => {
    return Object.keys(gamesObj).map((key) => {
      const { id, name, price, description, imageUrl, rating } = gamesObj[key]
      return (
        <Grid key={id} item xs={12} sm={6} md={4}>
          <GameCard
            title={name}
            price={price}
            descr={description}
            url={imageUrl}
            vote={+rating}
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