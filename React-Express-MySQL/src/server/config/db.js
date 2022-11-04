const mysql = require('mysql');
const db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'node_db', // node_db 내 movie 테이블 사용
  port:3307 //원래는 3306이나 현재 다른 수업의 마리아DB가 쓰고있어서..
})
module.exports = db;