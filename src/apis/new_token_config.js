import axios from 'axios';

export default axios.create({
    baseURL: 'https://kawal-corona.herokuapp.com'
});