import express from "express"
import cors from "cors"
import restaurants from "./api/restaruaunts.route.js"

//create app with express
const app = express()
//use cors for proper routing
app.use(cors())
app.use(express.json())

//setup first url route
app.use("/api/v1/restaraunts", restaraunts)
//add exception for non specified routes
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

//export this to be imported in run file
export default app