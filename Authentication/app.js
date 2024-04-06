const express=require('express')
const app=express()
const userRouter=require('./routes/user')
const session=require('express-session')
const bodyParser = require("body-parser");



//this is middleWare use to encode the form&body request value //example req.body from form
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

//set the static folder
app.use(express.static('static'))
//set the view engine
app.set('view engine','ejs')
//set the path simply
app.set('views','views')


//require the db connection
require('./db/conn')
//require the router of user

app.use(userRouter)


app.get('/home',(req,res)=>{
    res.render('home',{title:'Home|Page'})
})




app.listen(5000,()=>{
    console.log('port is listening')
})