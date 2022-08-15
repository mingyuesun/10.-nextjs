import axios from 'axios'
axios.defaults.withCredentials = true
const request = axios.create({
	baseURL: 'http://localhost:8000'
})

export default request