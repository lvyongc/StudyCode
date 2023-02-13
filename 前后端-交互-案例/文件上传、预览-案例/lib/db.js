const mysql = require("mysql2/promise");

let connection;

module.exports = {
    // 初始化
    async initDB(){
        connection = await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"123456",
            database:"jpg",
        });
    },
    getDB(){
        return connection;
    },
};