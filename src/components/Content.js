import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GameCard from './GameCard'
import gamesList from '../constants'
// import { getData } from '../services'
import firebase from '../firebase'


const useStyles = makeStyles({
  container: {
    paddingTop: '30px'
  }
});

const Content = () => {
  const classes = useStyles()
  
  const [games, setGames] = useState({})

  useEffect(() => {
    const gamesRef = firebase.database().ref('games')
    gamesRef.on('value', (snapshot) => {
    setGames(snapshot.val())
  })
  }, [])

  const  renderGameCards = (games) => {
    return games.map((game, i) => {
      const { id, title, price, description, image, vote } = game
      return (
        <Grid id={id} item xs={12} sm={6} md={4} key={Date.now() + i}>
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
      { Object.keys(games).length > 0 ? renderGameCards(gamesList): null}
    </Grid>
  )
}

export default Content