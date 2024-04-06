const express=require('express')
const router=express.Router()
const userModel=require('../model/user')
const bodyParser=require('body-parser')

router.use(bodyParser.urlencoded({extended:false}))
router.use(express.json())



router.get('/register',(req,res)=>{
    res.render('register')
})
router.get('/login',(req,res)=>{
    res.render('login')
})


router.post('/userRegister',async(req,res)=>{
    
    try{
        const{name,email,password}=req.body

        const user= await userModel.findOne({email})
        if(user){
           return  res.render('login')
        }


        const userDetail=new userModel({
            name,
            email,
            password
        })

        
        await userModel.create(userDetail)
        res.redirect('/home')
    }
   
    catch(err){
     res.send(err)
    }

})






router.post('/login',(req,res)=>{


    res.redirect('/home')
})





module.exports=router;