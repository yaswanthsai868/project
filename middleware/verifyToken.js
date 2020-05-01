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
        jwt.verify(extractedToken,'yash',(err,decodedToken)=>{
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

module.exports=verifyToken;