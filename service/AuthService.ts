import axios from 'axios'
import { Token } from "../models/Token.ts"
import { makePostRequest } from "../config/Utils.ts"
import { config as dotenv } from 'https://deno.land/x/dotenv/mod.ts'
await dotenv({ export: true })


export const getNewToken = async (): Token => {
  const SPOTIFY_CLIENT_ID: string = String(Deno.env.get("SPOTIFY_CLIENT_ID"))
  const SPOTIFY_CLIENT_SECRET: string = String(Deno.env.get("SPOTIFY_CLIENT_SECRET"))
  const SPOTIFY_AUTH_URI: string = String(Deno.env.get("SPOTIFY_AUTH_URI"))

  const headers: object = {
    "Content-Type": "application/x-www-form-urlencoded"
  }

  const body: string = `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`

  try {
    const res = await makePostRequest(SPOTIFY_AUTH_URI, headers, body)
    const accessToken = res.data.access_token
    const tokenType = res.data.token_type
    const expiresIn = res.data.expires_in

    return new Token(accessToken, tokenType, expiresIn)
  } catch (error) {
    console.log(error)
  }
}