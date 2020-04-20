import axios from 'axios';

export default axios.create({
    baseURL: 'http://covid19.merauke.go.id/web/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
  }
});