const mongoose=require('mongoose')
const config=require('config')

const connectDB=()=>{
    mongoose.connect(config.get("MONGOURI"), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('DataBase connected !'))
    .catch(()=>console.log('ERROR : DataBase not connected !!!'))
}

//puisque notre Base de donnée est sur atlas il faut utiliser cette syntax

/* const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB connected !');
    } catch (error) {
        console.log('DB not connected !!!', error);
    }
} */




module.exports = connectDB;