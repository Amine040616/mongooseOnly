const express=require('express')
const router=express.Router()
const Person=require('../models/Person')

//Best practice : Have to put three comment on top of the route
//@ path : localhost:5000/person/test
//description : test route
//public/private
router.get('/test', (req, res)=>{
    res.send('Route tested')
})
//@ path : localhost:5000/person/addPerson
//description : add person
//public/private
router.post('/addPerson', (req, res)=>{
    const {name, age, faveriteFoods}=req.body;
    const newPerson = new Person({
        name, age, faveriteFoods
    })
    newPerson.save()
    .then(el=>res.send(el))
    .catch(err=>console.log('erreur : ',err))
})
//@ path : localhost:5000/person/updatePerson
//description : update one person
//public/private
router.post('/updatePerson/:_id', (req, res)=>{
    const {_id}=req.params
    const {name, age, faveriteFoods}=req.body;
    Person.findOneAndUpdate({_id}, {$set:{name, age, faveriteFoods}})
    .then(el=>res.send(el))
    .catch(err=>console.log('erreur : ',err))
})
//@ path : localhost:5000/person/gettingAll
//description : getting all person
//public/private
router.get('/gettingAll', (req, res)=>{
    Person.find()
    .then(el=>res.send(el))
    .catch(err=>console.log('erreur : ',err))
})
//@ path : localhost:5000/person/getOnePerson
//description : getting one person by ID
//public/private
router.get('/getOnePerson/:_id', (req, res)=>{
    const {_id}=req.params
    Person.findOne({_id})
    .then(el=>res.send(el))
    .catch(err=>console.log('erreur : ',err))
})
//@ path : localhost:5000/person/deleteOnePerson
//description : delete one person by ID
//public/private
router.delete('/deleteOnePerson/:_id', (req, res)=>{
    const {_id}=req.params
    Person.findOneAndDelete({_id})
    .then(el=>res.send(el))
    .catch(err=>console.log('erreur : ',err))
})

module.exports = router