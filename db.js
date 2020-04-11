//importing to database
const db=require('mongodb').MongoClient

//database object
var dataBaseObj;
var userCollection;
var adminCollection;
function initDb()
{
    db.connect('mongodb+srv://nani868:Nani1211@cluster0-vaxak.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
if(err)
{
    console.log('error in connecting to database',err);
}
else
{
    console.log('connected to database');
    dataBaseObj=db.db('ecommerce');
    adminCollection=dataBaseObj.collection('admincollection');
    userCollection=dataBaseObj.collection('usercollection');
}
});
}


function getDb()
{
    return {adminCollection:adminCollection,userCollection,userCollection};
}

module.exports={initDb,getDb};