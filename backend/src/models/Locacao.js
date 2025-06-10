const { Datatypes } = require('sequilize')
const sequilize = require('../config/database');

const Localizacao = sequelize.define('locacoes', {
    loc_id: {
        type: Datatypes.INTERGER,
        primaryKey: true,
        autoIncrement: true
    },
    loc_usu_id: {
        type: Datatypes.INTERGER,
         allowNull: false,
         references: {
            model: 'usuarios',
            key:'usu_id '
         }
    },
    loc_sala_id: {
        type: Datatypes.INTERGER,
        allow: false,
        references: {
            model: 'salas',
            key: 'sal_id'
        } 
        
},

);
