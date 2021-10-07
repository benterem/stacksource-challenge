const { request, response } = require('express')
const express = require('express')
const app = express()

// Object is essentially hash table in JS has o(1) to check if exists
const zipCodes = {}


app.get('/display', (request, response) => {
  const zip = Number(request.params.id)
  response.status(200).send(zipCodes)
})

app.get('/has/:id', (request, response) => {
  const zip = Number(request.params.id)
  response.status(200).send(zip in zipCodes)
})

app.post('/insert/:id', (request, response) => {
  const zip = Number(request.params.id)
  zipCodes[zip] = zip
  response.status(201).send(`Zip code ${zip} inserted`)
})



const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})