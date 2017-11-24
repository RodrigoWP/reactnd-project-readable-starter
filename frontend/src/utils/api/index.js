'use strict'

import Axios from 'axios'

const AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
  headers: { 'Authorization': 'whatever-you-want' }
})

export const apiGet = (url) => {
  return AxiosInstance.get(url)
}

export const apiPost = (url, data) => {
  return AxiosInstance.post(url, data)
}

export const apiPut = (url, data) => {
  return AxiosInstance.put(url, data)
}

export const apiDelete = (url) => {
  return AxiosInstance.delete(url)
}
