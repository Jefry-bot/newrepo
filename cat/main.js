import express from 'express'
import axios from 'axios'

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  const users = await axios.get("http://service-user:3000/users").then(req => req.data)
  
  res.json({
    users,
    pet: {
      name: "Izi"
    }
  })
})

app.listen(3001, () => {
  console.log("Is running")
})