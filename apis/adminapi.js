const exp=require("express")

const adminApp=exp.Router()

const cloudinary=require('cloudinary')

const cloudinaryStorage=require('multer-storage-cloudinary')

const multer=require('multer')

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})

var storage=cloudinaryStorage({
    cloudinary:cloudinary,
    folder:'productPics',
    allowedFormats:['jpg','png'],
    filename: function(req,file,cb)
    {
        cb(undefined,file.fieldname+"-"+Date.now())
    }
})

var uploader=multer({storage:storage})

adminApp.post('/addproduct',uploader.single('images'),(req,res,next)=>{;
             
    let productCollection = req.app.locals.pC;
    productData=JSON.parse(req.body.productdata)
    imageUrl=req.file.secure_url;
    product={}
    keys=['Brand','Model','Price','Description','Sold_By','type']
    for (k in keys)
    {
        product[keys[k]]=productData[keys[k]]
        delete productData[keys[k]]
    }
    product['features']=productData
    product['Photo']=imageUrl
   productCollection.updateOne({Type:product.type},{$push:{products:product}},(err,success)=>{
       if(err)
        {
            console.log('error while uploading product'+err);
            res.send({message:"Error in inserting"})
        }        
        res.send({message:"success"})
    })
})
adminApp.use((req,res,next)=>{
    res.send({message:`Path ${req.url} not found for the method ${req.method}`})
})
module.exports=adminApp