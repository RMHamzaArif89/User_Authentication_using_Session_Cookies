mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/authentication_session')
.then(()=>console.log('connection is established'))
.catch((err)=>console.log(err))


