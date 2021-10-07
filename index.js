const express = require('express')
const app = express()

const zipCodes = {}


app.get('/display', (request, response) => {
  const zip = Number(request.params.id)
  response.status(200).send(zipCodes)
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