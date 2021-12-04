import axios from 'axios'

const API_URL = 'api'

export const request = async ({ url, method = 'get', data = {} }) => {
  const response = await axios[method](`${API_URL}/${url}`, data)
  return response.data
}