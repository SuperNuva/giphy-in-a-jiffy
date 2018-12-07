import React, { Component } from 'react';
import './App.css';
import Trending from './Trending.js'
import SearchResult from './SearchResult';
import trending from './services/trending'
import searching from './services/searching'

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      message: '',
      onLoad: true,
      sortData: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSortClick = this.onSortClick.bind(this);
  }

  componentDidMount() {
    this.getTrending()
  }

  async getTrending() {
    try {
      const trendingGifs = await trending()
      this.setState({results: trendingGifs})
    } catch(err) {
      console.error(err);
    }
  }

  handleChange(evt) {
    this.setState({query: evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.setState({message:'Loading GIFs...'})
    
    try {
      const  gifs = await searching(this.state.query);
      this.setState({
        results: gifs,
        message: `Search results for "${this.state.query}"`,
        onLoad: false,
        sortData: false,
      })
    } catch(err) {
      console.error(err);
    }
    this.setState({query: ''})
  }

  onSortClick() {
    this.setState({sortData: true})
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Giphy in a Jiffy!</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input className="form-control" type="text" value={this.state.query} onChange={this.handleChange}/>
            <div className="input-group-btn">
              <button className="btn btn-primary" id="searchBtn" type="submit" disabled={!this.state.query}>Search</button>
            </div>
          </div>
        </form>
        {
          this.state.onLoad
          ? <Trending results={this.state.results}/>
          : <SearchResult 
          message={this.state.message} 
          results={this.state.results}
          onSortClick={this.onSortClick}
          sortData={this.state.sortData} />
        }
      </div>
    );
  }
}

export default App;
