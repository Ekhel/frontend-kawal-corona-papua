import axios from 'axios';

const Key = 'Token ad06fed82b98fe8206d31674f79886d6c53ef2a0';

export default axios.create({
    baseURL: 'https://kawal-corona.herokuapp.com',
    headers: {'Authorization': Key}
});