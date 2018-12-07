import axios from 'axios';

export default async () => {
  const http = 'https://api.giphy.com//v1/gifs/trending?';
  const key = 'api_key=dc6zaTOxFJmzC';
  const limit = '&limit=30'
  const url = http + key + limit
  const response = await axios.get(url);

  return response.data.data
}