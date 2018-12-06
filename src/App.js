import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Trending from './Trending.js'
import SearchResult from './SearchResult';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      message: '',
      onLoad: true,
      sortData: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSortClick = this.onSortClick.bind(this);
  }

  componentDidMount() {
    this.getTrending()
  }

  async getTrending() {
    const http = 'https://api.giphy.com//v1/gifs/trending?';
    const key = 'api_key=dc6zaTOxFJmzC';
    const limit = '&limit=30'
    const url = http + key + limit;
    try {
      const { data } = await axios.get(url);
      this.setState({results: data.data})
    } catch(err) {
      console.error(err);
    }
  }

  handleChange(evt) {
    this.setState({query: evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const http = 'https://api.giphy.com/v1/gifs/search?';
    const query = `q=${this.state.query}`;
    const key = '&api_key=BQStT8BRsgsqlIugTI8fRI5k6wZzgp3H';
    const limit = '&limit=30'
    const url = http + query + key + limit;
    try {
      const { data } = await axios.get(url); //returns a json obj with the info in its property "data"
      this.setState({
        results: data.data, //the object in response data has a property "data" that holds the array
        message: `Search results for "${this.state.query}"`,
        onLoad: false,
        sortData: false,
        filterType: null
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
        <h1>Giphy in a Jiffy!</h1>
        <form  className='searchBar' onSubmit={this.handleSubmit}>
          <input id='searchInput' type='text' value={this.state.query} onChange={this.handleChange}/>
          <button id='searchBtn' type='submit' disabled={!this.state.query}>Search</button>
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
