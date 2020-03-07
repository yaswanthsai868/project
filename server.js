//importing express function
const exp=require('express')

//importing path package
const path=require('path')

//creating the express object by calling the express function
const app=exp()

//importing user and admin app
const userApi=require('./apis/userapi')
const adminApi=require('./apis/adminapi')

//connecting to frontend
app.use(exp.static(path.join(__dirname,'./dist/ecommerce')))

//sending request to admin and user api
app.use('/admin',adminApi)
app.use('/user',userApi)
const port=3000


app.listen(port,()=>{console.log("server listening on port:3000.....")})

