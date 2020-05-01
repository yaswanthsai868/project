const exp=require("express")

const bcrypt=require('bcrypt')

const userApp=exp.Router()

const verifyToken=require('../middleware/verifyToken')

const jwt=require('jsonwebtoken')

userApp.post('/register',(req,res)=>{
    userCollection=req.app.locals.userCollection;
    userCollection.findOne({username:req.body.username},(err,obj)=>{
        if(err)
        {
            console.log('Error while finding'+err);
        }
        else if(obj!=null)
        {
            res.send({message:'User already exists'});
        }
        else
        {
            bcrypt.hash(req.body.password,7,(err,hashedPassword)=>{
                if(err)
                {
                    console.log("error in hashing"+err);
                }
                else
                {
                    req.body.password=hashedPassword;
                    userCollection.insertOne(req.body,(err,obj)=>{
                        if(err)
                        {
                            console.log('Error in inserting the record'+err);
                        }
                        else
                        {
                            res.send({message:'Sign up successful'});
                        }
                    })
                }
            })
                }
            });
        });


//login
userApp.post('/login',(req,res)=>{
    userCollection=req.app.locals.userCollection;
    userCollection.findOne({username:req.body.username},(err,obj)=>{
        if(err)
        {
            console.log("Error while checking username",err)
        }
        else if(obj==null)
        {
            res.send({message:"Invalid Username"})
        }
        else
        {
            bcrypt.compare(req.body.password,obj.password,(err,status)=>{
                if(err)
                {
                    console.log("error while checking password",err)
                }
                else if(status==true)
                {
                    jwt.sign({username:req.body.username},'yash',{expiresIn:60},(err,token)=>{
                        if(err)
                        {
                            console.log('Error in signing the token')
                        }
                        else
                        {
                            res.send({token:token,message:req.body.username})
                        }
                    })
                }
                else
                {
                    res.send({message:"Invalid password"})
                }
            })
            
        }
    })
})

userApp.get('/check',verifyToken,(req,res)=>{
    res.send({message:'Clicked'})
})

module.exports=userApp;