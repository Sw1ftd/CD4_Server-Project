//Initialize server object
const express = require("express")
const app = express()

app.use(express.json())
app.use( express.static('public') )

let movies = ["The Avengers", "Spiderman: Homecoming"]
let ratings = []

app.post("/movie", (req, res) => {
    //console.log(req.body)
    movies.push(req.body.name)
    //console.log(movies)
    res.send(movies)
})

app.post("/rating", (req, res) => {
    //console.log(req.body)
    if(req.body.name <= 10 && req.body.name >=0 && !(req.body.name == "")){
    ratings.push(req.body.name)
    }
    //console.log(movies)
    res.send(ratings)
})

app.get("/movies", (req, res) => {
    console.log("/movies")
    res.send(movies)
})
app.get("/ratings", (req, res) => {
    console.log("/ratings")
    res.send(ratings)
})

//Start listening on port 3000, callback function
app.listen(80, () => console.log("Server started") )