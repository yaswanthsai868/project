const exp=require("express")

const adminApp=exp.Router()

adminApp.post('/addproduct',(req,res)=>{
    productCollection = req.app.locals.productCollection;
    
    res.send({message:'unsuccess'});
})

adminApp.use((req,res,next)=>{
    res.send({message:`Path ${req.url} not found for the method ${req.method}`})
})
module.exports=adminApp