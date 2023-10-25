import express from 'express'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    name: "Jefry Zarate Ruiz"
  })
})

app.listen(3000, () => {
  console.log("Is running")
})