'use strict';

function routing(application){
    const login = require('./login')
    const APIS = require('./APIS');

    application.use('/', login);
    application.use('/webServices', APIS);

    return application;
}

module.exports = routing