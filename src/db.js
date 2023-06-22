const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error,
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.exports =  connection;