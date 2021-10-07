const express = resquire('express')
const app = express()




const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})