const express = require('express')
const app = express()
const port = 8080
const userRoutes = require('./routes/routes')


app.use('/members', userRoutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})