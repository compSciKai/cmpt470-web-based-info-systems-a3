var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "wbis",
    password: "bobbyc",
    insecureAuth: true
});


var rectanglesModel = {
    attr1: "test",
    attr2: "test2",
    add: function(width, height, color) {
        return;
    },
    remove: function(id) {
        // db call
        return;
    },
    getAll: function() {
        // db call
        var dumby_data = [{id: 0, width: 90, height: 30, color: "red"},
          {id: 1, width: 15, height: 30, color: "black"}];
        return dumby_data;
    },
    connect: async function() {
        var test;
        con.connect(async function(err) {
            if (err) { console.log('error code: ' + err); test = await "unsuccessful"; }
            else { console.log('database connected'); test = await "Connected"; }
        });
        console.log('test value is ' + await test);
        return test;
    }
}

module.exports = rectanglesModel;
