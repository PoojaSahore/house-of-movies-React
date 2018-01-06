import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie : []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        fetch(`https://www.omdbapi.com/?i=${this.props.id}&apikey=ac364a37`)
        .then(data => data.json())
        .then(data => { console.log(data)
            this.setState({movie : data})
        })
    }

    handleClick() { 
        this.props.changeValue(this.props.id)
      }

    render() {
        return (
            <div className="movie">
            <Card>
            <CardMedia
                overlay={<CardTitle title={this.state.movie.Title} subtitle={this.state.movie.Released} />}
            >
                <img src={this.state.movie.Poster} alt="Movie Poster" />
            </CardMedia>
            <CardTitle title={this.state.Actors} subtitle={this.state.movie.Genre} />
            <CardText>
                <h6>Director : {this.state.movie.Director}</h6>
                <h6>Runtime : {this.state.movie.Runtime}</h6>
                <h6>Language : {this.state.movie.Language}</h6>
                <h6>imdb Rating : {this.state.movie.imdbRating}</h6>
                {this.state.movie.Plot}
            </CardText>
            <CardActions>
                <FlatButton label="Go Back" onClick={this.handleClick} style={{backgroundColor : '#38ef7d'}} />
            </CardActions>
            </Card>
            </div>
        )
    }
}

export default Details;