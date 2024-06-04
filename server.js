const app = require('./app')


app.get('/',(req, res) => {
    res.send("<h1> Help </h1>")
})

app.route("/users", (req, res) => {
    res.status(200).json({
        users: [],
        success: false
    })
})


app.listen(4000, () => {
    console.log("server is running smoothly")
})