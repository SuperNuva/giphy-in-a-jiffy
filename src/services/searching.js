import axios from 'axios';

export default async (term) => {
  const http = 'https://api.giphy.com/v1/gifs/search?';
  const query = `q=${term}`;
  const key = '&api_key=BQStT8BRsgsqlIugTI8fRI5k6wZzgp3H';
  const limit = '&limit=30'
  const url = http + query + key + limit;
  const response = await axios.get(url)

  return response.data.data
}