import axios from 'axios'

const clienteAxios = axios.create({
    baseUrl : process.env.REACT_APP_BACKEND_URL,
    // timeout:3000,
    headers:{'Content-type' : 'application/x-www-form-urlencoded'}
});
export default clienteAxios;