const mongoose=require('mongoose')
const schema=mongoose.Schema

const PersonSchema = new schema({
    name:{type:String, required:true},
    age:{type:Number},
    faveriteFoods:[]
})

module.exports = Person = mongoose.model('personna', PersonSchema)