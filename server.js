//importing express function
const exp=require('express')

//importing path package
const path=require('path')

//importing node scheduler
const scheduler=require('node-schedule')

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

app.use(exp.json({ limit: '1mb' }))

//sending request to admin and user api
app.use('/admin',adminApi)
app.use('/user',userApi)
app.use('/auth',authapi)

var schedulerjob=scheduler.scheduleJob('0 0 * * *',()=>{
    console.log('Server is under Maintainance')
    app.locals.resetPasswordCollection.deleteMany({},(err,obj)=>{
        if(err)
        {
            console.log('error while deleting records',err)
        }
        else
        {
            console.log('server back online')
        }
    })
})

let productsCollection
mongoDb.connect(process.env.dbUrl,{useUnifiedTopology:true,useNewUrlParser:true},(err,clientObj)=>{
    if(err)
    {
        console.log('Error while connecting to the mongodb',err);
    }
    else
    {
        
        app.locals.userCollection=clientObj.db(process.env.dbName).collection(process.env.dbCollectionUser);
        app.locals.adminCollection=clientObj.db(process.env.dbName).collection(process.env.dbCollectionAdmin);
        app.locals.resetPasswordCollection=clientObj.db(process.env.dbName).collection(process.env.dbCollectionResetPass);
        app.locals.pC =clientObj.db(process.env.dbName).collection(process.env.dbCollectionProducts); 
       

        console.log('Database connected.....')
        app.listen(process.env.port,()=>{console.log(`server listening on port:${process.env.port}.....`)});
    }
})

app.use((req,res,next)=>{
    res.send({message:`Path ${req.url} not found for the method ${req.method}`})
})