const express = require('require');
const cors = require('cors');
const helmet = require('helmet');

const confugureExpress = (app) => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    //rotas
    app.use('/api', require('../routes'));
    
    return app;
};

module.exports = configureExpress;