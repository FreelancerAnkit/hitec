const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'palliankit123',
    database: 'toptec'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

module.exports = {
    getUsers: new Promise((resolve, reject) => {
        con.query('SELECT * FROM users', (err, rows) => {
            resolve(rows)
        });
    })
}
