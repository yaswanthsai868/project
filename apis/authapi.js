const exp=require('express')

const auth=exp.Router()

const jwt=require('jsonwebtoken')

const nodemailer=require('nodemailer')

const bcrypt=require('bcrypt')

const verifyToken=require('../middleware/verifyToken')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.nodemailerUser,
        pass:process.env.nodemailerPass
    }
})


// forgot password mail sender
auth.post('/forgotpassword',(req,res)=>{
    userCollection=req.app.locals.userCollection;
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
            let otp=Math.floor(Math.random()*1000000 +1)
            jwt.sign({username:obj.username,otp:otp},process.env.hashKey,{expiresIn:300},(err,signedToken)=>{
                if(err)
                {
                    console.log('error while signing otp token',err)
                }
                else
                {
                    req.app.locals.resetPasswordCollection.findOne({username:obj.username},(err,resetobj)=>{
                        if(err)
                        {
                            console.log('error while checking the resetCollection',err)
                        }
                        else if(resetobj==null)
                        {
                            req.app.locals.resetPasswordCollection.insertOne({username:obj.username,otpToken:signedToken},(err,iobj)=>{
                                if(err)
                                {
                                    console.log('error in the inserting the otp token',err)
                                }
                                else
                                {
                                    console.log('Inserted the otp jwt')
                                }
                            })
                        }
                        else
                        {
                            req.app.locals.resetPasswordCollection.updateOne({username:obj.username},{$set:{otpToken:signedToken}},(err,uobj)=>{
                                if(err)
                                {
                                    console.log('error while updating the otp token',err);
                                }
                                else
                                {
                                    console.log('updated the otp jwt')
                                }
                            })
                        }
                        const mailOptions={
                            from:process.env.nodemailerUser,
                            to:req.body.username,
                            subject:'Password Reset OTP',
                            html:"<p>OTP for password reset is "+otp+"</p>"
                        }
                        transporter.sendMail(mailOptions,(err,info)=>{
                            if(err)
                            {
                                console.log('Error while sending the mail',err)
                            }
                            else
                            {
                                res.send({message:"Password reset OTP has been sent to your email",username:obj.username})
                            }
                        })
                    })
                    
                    
                }
                
            })

        }
    })
})
    
// changing the password

auth.post('/changepassword',verifyToken,(req,res)=>{
    bcrypt.hash(req.body.password,7,(err,hashedPass)=>{
        if(err)
        {
            console.log('error in hashing the password',err);
        }
        else
        {
            userCollection=req.app.locals.userCollection;
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