const jwt=require('jsonwebtoken')

let verifyToken=(req,res,next)=>{
    authorizationToken=req.headers['authorization']
    if(authorizationToken==undefined)
    {
        res.send({message:'Please login'})
    }
    else
    {
        extractedToken=authorizationToken.split(' ')[1]
        jwt.verify(extractedToken,process.env.hashKey,(err,decodedToken)=>{
            if(err)
            {
                res.send({message:'Please relogin'})
            }
            else
            {
                next();
            }
        })
    }
}

let test=()=>{
    console.log('hello')
}
module.exports=verifyToken;