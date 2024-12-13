import { Token } from "../models/Token.ts"
import { makePostRequest } from "../config/Utils.ts"
import { config as dotenv } from 'https://deno.land/x/dotenv/mod.ts'
await dotenv({ export: true })

const SPOTIFY_CLIENT_ID: string = String(Deno.env.get("SPOTIFY_CLIENT_ID"))
const SPOTIFY_CLIENT_SECRET: string = String(Deno.env.get("SPOTIFY_CLIENT_SECRET"))
const SPOTIFY_AUTH_URI: string = String(Deno.env.get("SPOTIFY_AUTH_URI"))

export const getNewToken = async (): Promise<Token> => {
  const headers: object = {
    "Content-Type": "application/x-www-form-urlencoded"
  }

  const body: string = `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`

  const res = await makePostRequest(SPOTIFY_AUTH_URI, headers, body)

  return new Token(
    res.data.access_token,
    res.data.token_type,
    res.data.expires_in
  )
}

// console.log(
//   {
//     SPOTIFY_CLIENT_ID: SPOTIFY_CLIENT_ID,
//     SPOTIFY_CLIENT_SECRET: SPOTIFY_CLIENT_SECRET,
//     SPOTIFY_AUTH_URI: SPOTIFY_AUTH_URI
//   }
// )