// in client
import axios from 'axios'

// function
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
