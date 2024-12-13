import axios from 'npm:axios'

export const makeGetRequest = async (endpoint: string = "", headers: object = {}, body: object | string) => {
  return await axios.get(endpoint, { headers: headers })
}

export const makePostRequest = async (endpoint: string = "", headers: object = {}, body: object | string) => {
  return await axios.post(endpoint, body, { headers: headers })
}

export const makePutRequest = async (endpoint: string = "", headers: object = {}, body: object | string) => {
  return await axios.put(endpoint, body, { headers: headers })
}

// export const makeDeleteRequest = async (endpoint: string = "", headers: object = {}, body: object | string) => {
//   return await axios.delete(endpoint, body, { headers: headers })
// }