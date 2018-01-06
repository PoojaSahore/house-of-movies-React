import React, { Component } from 'react';
import './App.css';
import MovieCard from '../MovieCard'
import Details from '../Details'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : [],
      input : '',
      value : false,
      id : ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.display = this.display.bind(this)
  }

  changeValue(id) {
    this.setState({
      value : !this.state.value,
      id
    })
  }

  handleClick() {
    if(this.state.input === '')
      alert('enter a movie')
      else {
        fetch(`https://www.omdbapi.com/?s=${this.state.input}&page=2&apikey=ac364a37`)
        .then(data => data.json())
        .then(data => { console.log(data,data.Search)
            if(data.Response === 'False') {
              alert('Please try again with fewer keywords')
              this.setState({
                input : '',
                value: false
              })
            }
              else {
                this.setState({
                  movies : data.Search,
                  input : '',
                  value: false
                })
              }
        })
      }
  }

  display() {
    if(!this.state.value) {
      return (this.state.movies.map(movie => 
       <MovieCard movie={movie} changeValue={this.changeValue} key={movie.imdbID} /> 
      ) )
    }
      else
        if(this.state.id !== '') 
          return <Details id={this.state.id} changeValue={this.changeValue} /> 
  }

  render() {  console.log(this.state)
    return (  
      <div className="App">
        <div class="jumbotron">
          <div class="container text-center">
            <h1 id="header">HOUSE of MOVIES</h1>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label>Search movies</label>
            <input value={this.state.input} onChange={(e) => this.setState({input : e.target.value})} type="text" className="form-control" placeholder="Enter here..." />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary" id="bttn">search</button>
          <br /> <br /> <br />
          <div className="content"> 
            {this.display()}
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
