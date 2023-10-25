import express from 'express'

const app = express()

app.use(express.json())

app.get("/users", (req, res) => {
  res.json([
    {
      name: "Jefry",
      lastname: "Zarate"
    }
  ])
})

app.listen(3000, () => {
  console.log("Is running")
})