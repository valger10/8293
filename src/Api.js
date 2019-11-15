import axios from 'axios'

let BASE_URL = 'https://swapi.co/api/people/'

// variable for all gets
export const get = async (path, params = {}) => {
  return axios.get(`${BASE_URL}${path}`, params).then(res => res.data)
}
export const getSearchData = parms => {
  return get(`?search=`, parms)
}
