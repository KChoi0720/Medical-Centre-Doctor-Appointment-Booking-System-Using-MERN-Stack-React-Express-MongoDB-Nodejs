import express from 'express'
import cors from 'cors'
import 'dotenv/config'
 
// app config
const app = express()
const port = process.env.PORT || 4000

// middlewares
app.use(express.json()) //request bypass with this
app.use(cors()) // allow front end to connect


// api endpoints
app.get('/', (req, res) => {
    res.send('api working')
})

app.listen(port, () => {
    console.log('server started', port)
})



