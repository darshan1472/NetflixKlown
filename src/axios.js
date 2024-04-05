// we will fetch api using axios liabrary .We can do this using async await also but axios makes it more easier

import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

export default instance;