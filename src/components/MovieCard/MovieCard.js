import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './MovieCard.css'

const MovieCard = (props) => {

  const handleClick = () => { 
    props.changeValue(props.movie.imdbID)
  }

  return (
  <div className="movie">
  <Card>
    <CardMedia
      overlay={<CardTitle title={props.movie.Title} subtitle={props.movie.Year} />}
    >
      <img src={props.movie.Poster} alt="Movie Poster" />
    </CardMedia>
    <CardActions>
      <FlatButton label="Read More" onClick={() => handleClick()} style={{backgroundColor : '#38ef7d'}} />
    </CardActions>
  </Card> </div>
  )
}

export default MovieCard;