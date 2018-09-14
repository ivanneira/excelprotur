var fs = require('fs');
var excel = require('excel4node');

var knex = require('knex')({
    client: 'mssql',
    connection: {
        host : '10.64.65.200',
        port: 5000,
        user : 'sa',
        password : 'Alamitos+2016',
        database : 'MSP-IncluirSalud'
    },
    debug: false,
    pool: { min: 0, max: 40 }
});

readConfig('lastid.txt');

function readConfig(filename){

    fs.readFile(filename, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log(data)

        } else {
            console.log(err);
        }
    });
}