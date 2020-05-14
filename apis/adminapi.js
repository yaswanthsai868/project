const exp=require("express")

const adminApp=exp.Router()

 
adminApp.post('/addproduct',(req,res)=>{;
             
    let productCollection = req.app.locals.pC;
    
    console.log(req.body);
    // cloudinary.uploader.upload(req.body.Photo,(err,result)=>{
    //     if(err)
    //     {
    //         console.warn(err);
    //     }

    //     console.log("pic CDN link is",result);

    // })
    
    productCollection.update({Type:req.body.type},{$push:{products:req.body}},(err,success)=>{
       if(err)
        {
            console.warn(err)
            console.log(err);
            res.send({message:"Error in inserting"})
        }        
        res.send({message:"success"})
    })
})
adminApp.use((req,res,next)=>{
    res.send({message:`Path ${req.url} not found for the method ${req.method}`})
})
module.exports=adminApp