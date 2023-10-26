import express from 'express'

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res.json({
    users: [
      {
        name: "Alawaza"
      }
    ],
    pet: {
      name: "Izi"
    }
  })
})

app.listen(3001, () => {
  console.log("Is running")
})