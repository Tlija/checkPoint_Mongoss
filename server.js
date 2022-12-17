const experss = require("express");
const mongoose = require("mongoose");
const port = 5000;

const app = experss();
const dbURI='mongodb+srv://hachem:hachemtlija@mongodb.aip2eaa.mongodb.net/MongoDB?retryWrites=true&w=majority'

mongoose.connect(dbURI,(err,done)=>{
    if(err){
        console.log(err)
    }
    if(done){
        console.log('base de donne connect avec succes')
    }
})

const { Schema } = mongoose;

const personeSchema = new Schema({
  name: String,
  description: String,
  age: { type: Number },
  favoriteFoods: String,
  createdate: { type: Date, default: Date.now },
});
const personModel = mongoose.model("persone", personeSchema);

// const newperson = new personModel;
//     newperson.name= 'Zahra';
//     newperson.description ='TaTa';
//    newperson.age=26;
//     newperson.favoriteFoods="pizza";
//     newperson.createdate= new Date;


// console.log(newperson);
// newperson.save(function (err) {
//     if (err) return "error";
//     // saved!
// });
//Use model.find() to Search Your Database

// personModel.find({},(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
//----------------Name--------------//
//     personModel.find({name:'hachem tlijani'},(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
//--------------- id Name-------------//
// personModel.find({_id:('639d00c55f229dd8fd0c7288')},(error,data)=>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log(data)
//         }
//     })
//------findOneAndRemove-------------------///
// personModel.findOneAndRemove({name:'Taher'},(error,deletedRecord)=>{
//     if(!error){
//         console.log(deletedRecord)

//     }
// })


app.listen(port, (err) => {
  err ? console.log(err) : console.log(`le server is runing on port ${port}`);
});
