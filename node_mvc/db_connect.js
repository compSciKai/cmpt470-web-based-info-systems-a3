var mysql = require('mysql');

// connection object
var con = mysql.createConnection({
    database: 'cmpt470',
    user: 'wbis',
    host: 'localhost',
    password: 'bobbyc'
});

// show if connected
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to cmpt470 database');
});

module.exports = con;
