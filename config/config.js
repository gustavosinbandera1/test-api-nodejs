var config = {
    development: {
        //url to be used in link generation
        url: '',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '27017',
            db: 'mongodb://test:testnodejs2019@ds145563.mlab.com:45563/schooltest'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: process.env.PORT || 3000
        }
    },
    production: {
        //url to be used in link generation
        url: '',
        //mongodb connection settings
        database: {
            host: '127.0.0.1',
            port: '27017',
            db:     'mongodb://test:testnodejs2019@ds145563.mlab.com:45563/schooltest'
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   process.env.PORT || 3000
        }
    }
    };
    module.exports = config;