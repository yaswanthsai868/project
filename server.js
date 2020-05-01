//importing express function
const exp=require('express')

//importing path package
const path=require('path')

//creating the express object by calling the express function
const app=exp()

//connection to mongoDb
const mongoDb=require('mongodb').MongoClient

//using environment variables
require('dotenv').config()

//importing user and admin app
const userApi=require('./apis/userapi')
const adminApi=require('./apis/adminapi')
const authapi=require('./apis/authapi')

//connecting to frontend
app.use(exp.static(path.join(__dirname,'./dist/ecommerce')))

app.use(exp.json())

//sending request to admin and user api
app.use('/admin',adminApi)
app.use('/user',userApi)
app.use('/auth',authapi)

mongoDb.connect(process.env.dbUrl,{useUnifiedTopology:true,useNewUrlParser:true},(err,clientObj)=>{
    if(err)
    {
        console.log('Error while connecting to the mongodb',err);
    }
    else
    {
        app.locals.userCollection=clientObj.db(process.env.dbName).collection(process.env.dbCollectionUser);
        app.locals.adminCollection=clientObj.db(process.env.dbName).collection(process.env.dbCollectionAdmin);
        console.log('Database connected.....')
        app.listen(process.env.port,()=>{console.log(`server listening on port:${process.env.port}.....`)});
    }
})


app.use((req,res,next)=>{
    res.send({message:`Path ${req.url} not found for the method ${req.method}`})
})