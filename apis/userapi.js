const exp=require("express")

const bcrypt=require('bcrypt')

const userApp=exp.Router()

userApp.use(exp.json())

const dataBaseObj=require('../db')
userApp.post('/register',(req,res)=>{
    dataBaseObj.initDb();
    userCollection=dataBaseObj.getDb().userCollection;
    userCollection.findOne({username:req.username},(err,obj)=>{
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

module.exports=userApp