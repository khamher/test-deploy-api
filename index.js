const express = require('express')
const app = express()


// testing api
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome from api'});
});


const PORT = process.env.PORT || 5000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})