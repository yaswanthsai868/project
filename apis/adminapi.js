const exp=require("express")

const adminApp=exp.Router()

const dataBaseObj=require('../db')
dataBaseObj.initDb();
const adminCollection=dataBaseObj.getDb().adminCollection;




module.exports=adminApp