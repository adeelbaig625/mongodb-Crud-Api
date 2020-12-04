
const MongoDb= require('mongodb')
const MongoClient = MongoDb.MongoClient;
let db1='';
const MongoConnect=(cb)=>
{
    // enter your username and password
const uri = "mongodb+srv://<username>:<password>@cluster0.u1me1.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri, { useNewUrlParser: true }).then(result=>{
   
    cb(result)
    db1=result.db('test')
    })
    .catch(err=>{console.log(err)
    throw err});
    
}
const getData=()=>
{
    const response=new Promise((resolve,reject)=>
    {
        db1.collection('user').find().toArray().then(result=>
            {
                resolve(result)
            })
            .catch(err=>
            {
                reject(err)    
            })
    })
    return response
}
const getDataById=(id)=>
{
    const response=new Promise((resolve,reject)=>
    {
        db1.collection('user').find({_id:new MongoDb.ObjectId(id)}).next().then(result=>
            {
                console.log(result)
                resolve(result)
            })
            .catch(err=>
            {
                reject(err)    
            })
    })
    return response
}
const insertData=(body)=>
{
    const response= new Promise((resolve,reject)=>
    {
        db1.collection('user').insertOne(body).then(result=>
            {
               resolve(result)
            }).catch(err=>
                {
                  reject(err)
                })
    })
    return response
}
const DeleteById=(id)=>
{
    const response=new Promise((resolve,reject)=>
    {
        db1.collection('user').deleteOne({_id:new MongoDb.ObjectId(id)}).then(result=>
            {
               
                resolve("deleted")
            })
            .catch(err=>
            {
                reject(err)    
            })
    })
    return response
}

module.exports={MongoConnect,insertData,getData,getDataById,DeleteById}