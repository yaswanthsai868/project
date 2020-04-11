const exp=require('express')

const auth=exp.Router()

const jwt=require('jsonwebtoken')

const nodemailer=require('nodemailer')

const bcrypt=require('bcrypt')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'electrnica.ekart@gmail.com',
        pass:'Nani@1211'
    }
})

const dataBaseObj=require('../db')

dataBaseObj.initDb();

var userCollection;

// forgot password mail sender
auth.post('/forgotpassword',(req,res)=>{
    userCollection=dataBaseObj.getDb().userCollection;
    userCollection.findOne({username:req.body.username},(err,obj)=>{
        if(err)
        {
            console.log('Error while checking the username',err)
        }
        if(obj==null)
        {
            res.send({message:'Invalid username'})
        }
        else
        {
            jwt.sign({username:req.body.username,password:req.body.password},'yash',{expiresIn:60},(err,token)=>{
                if(err)
                {
                    console.log('Error while signing the token',err);
                }
                else
                {
                    const mailOptions={
                        from:'electronica.ekart@gmail.com',
                        to:req.body.username,
                        subject:'Password Reset Link',
                        html:"<p>Click the below link to confirm  request to change your password.The link expires in a minute.</p><a href='http://localhost:3000/auth/resetpassword/"+token+"'>Click here</a>"
                    }
                    transporter.sendMail(mailOptions,(err,info)=>{
                        if(err)
                        {
                            console.log('Error while sending the mail',err)
                        }
                        else
                        {
                            res.send({message:"Password reset link has been sent to your email"})
                        }
                    })
                }
            })
        }
    })
})
    
//password resetter

auth.get('/resetpassword/:token',(req,res)=>{
    token=req.params.token;
    jwt.verify(token,'yash',(err,decodedtoken)=>{
        if(err)
        {
            console.log('Error while verifying the token',err);
        }
        else
        {
            user=decodedtoken.username;
            pass=decodedtoken.password;
            userCollection=dataBaseObj.getDb().userCollection;
            bcrypt.hash(pass,7,(err,hashedpass)=>{
                if(err)
                {
                    console.log('Error while encrypting the password',err);
                }
                else
                {
                    userCollection.updateOne({username:user},{$set:{password:hashedpass}},(err,obj)=>{
                        if(err)
                        {
                            console.log('Error while updating the password',err)
                        }
                        else
                        {
                            res.send({message:'Password has been changed'})
                        }
                    });
                }
            })
        }
    })
})

//changing the password

auth.post('/changepassword',(req,res)=>{
    bcrypt.hash(req.body.password,7,(err,hashedPass)=>{
        if(err)
        {
            console.log('error in hashing the password',err);
        }
        else
        {
            userCollection=dataBaseObj.getDb().userCollection;
            userCollection.updateOne({username:req.body.username},{$set:{password:hashedPass}},(err,obj)=>{
                if(err)
                {
                    console.log('Error while updating the password',err)
                }
                else
                {
                    res.send({message:'Password changed successfully'})
                }
            })
        }
    })
})


module.exports=auth