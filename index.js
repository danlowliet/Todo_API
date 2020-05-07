let express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

let todoRoutes = require('./routes/todos')

app.get('/', function (req, res) {  
    res.send("HELLO FROM THE ROUTE ROUTE")
})


//to use body-parser you need to use these to get access to the body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// to inculde our routes in routes/todos
app.use('/api/todos', todoRoutes)


app.listen(3000, function () {  
    console.log("APP IS RUNNING ON PORT 3000");
})