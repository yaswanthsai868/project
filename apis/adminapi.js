const exp=require("express")

const adminApp=exp.Router()



adminApp.use((req,res,next)=>{
    res.send({message:`Path ${req.url} not found for the method ${req.method}`})
})
module.exports=adminApp