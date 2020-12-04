const express=require('express')
const { get } = require('http')
const app=express()
const {MongoConnect,insertData,getData,getDataById,DeleteById}=require('./mongoconnet')
const portno=process.env.PORT||3000
app.use(express.json())
app.post('/insertdata',(req,res)=>
{
    const body=req.body
   insertData(body).then(result=>
    {
        res.json({
            success:1,
            status:'data inserted'
        })
    }).catch(err=>
        {
            res.json({
                success:0,
                status:'not inserted'
            })
        })
})
app.get('/get',(req,res)=>
{
    getData().then(result=>
        {
            res.json(result)
        }).catch(err=>
            {
                res.json({
                    success:"0",
                    status:"not successfull"
                })
            })
        })
app.get('/getUserById/:id',(req,res)=>
{
    const id=req.params.id
    console.log(id)
    // 5fca136d7f51ca3b4c7fc6af
    getDataById(id).then(result=>
        {
            res.json(result)
        }).catch(err=>
            {
                res.json({
                    success:"0",
                    status:"not found"
                })
            })
})
app.delete('/DeleteUser/:id',(req,res)=>
{
    const id=req.params.id
    console.log(id)
    
    DeleteById(id).then(result=>
        {
            res.json(result)
        }).catch(err=>
            {
                res.json({
                    success:"0",
                    status:"not found"
                })
            })
})
MongoConnect(result=>
    {
        console.log(result)
        app.listen(portno,()=>
        {
           
            console.log(`listening to port no : ${portno}`) 
        })
    }) 


