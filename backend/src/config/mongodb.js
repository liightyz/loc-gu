const mongoose = require('mongoose');
require('dotenv').config();
const conectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifieldToplogy: true
        });
        console.log('MongoDB conectado com sucesso');
    
    } catch (error) {
        console.error('Erro ao coneectr com o MongoDB', error.message);
        process.exit(1);
    }
};

module.export = conectaMongoDB;