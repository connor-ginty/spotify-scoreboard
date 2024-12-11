import express, { NextFunction, Request, Response} from "npm:express"

// const serverConfig = { 
//   port: 3000,
//   hostname: "127.0.0.1",
//   }

// const serverConfigString = JSON.stringify(serverConfig, null, " ")

// Deno.serve(
//   serverConfig,
//   (_req) => new Response("Deno server is up and running.\n\n" + serverConfigString)
// )

const app = express()
const port: number = Number(Deno.env.get("APP_PORT")) || 3000

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello from Deno and Express!")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})