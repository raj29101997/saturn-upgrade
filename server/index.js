import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
dotenv.config()
let {port,DBSTRING} = process.env

app.use(express.json());
mongoose.connect(DBSTRING).then((con)=>{
    console.log("Connection successful")
}).catch((err)=>{
    console.log("connection failed")
})


import fetchData from './router/fetchData.js'
app.use(fetchData)

import transactions from './router/store.js'
app.use(transactions)

app.listen(port, ()=>{
    console.log(`node server is running on port ${port}`)
})