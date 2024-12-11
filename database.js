const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/userTable")
const userSchema= mongoose.Schema({
    username: String,
    firstname:String,
    lastname:String,
    password:String
})

const User= mongoose.model('User', userSchema)

module.exports={
    User
}