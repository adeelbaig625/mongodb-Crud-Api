const { get } = require('http')
const {getdb}=require('./mongoconnet')
class Users
{
    constructor(name,age,gender,phone_no)
    {
        this.name=name,
        this.age=age,
        this.gender=gender,
        this.phone_no=phone_no
    }
    save()
    {
        // const db=getdb()
       
    }
}