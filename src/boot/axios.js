import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: ''
})

export default async ({ app, Vue, store, router }) => {
  Vue.prototype.$axios = axiosInstance

  axiosInstance.interceptors.request.use(request => {
    // #TODO: interceptors headers
    return request
  })

  axiosInstance.interceptors.response.use(response => {
    // const { status } = error.response

    console.log(response)
    // #TODO: cases
  })
}

export { axiosInstance }
