import mysql from 'mysql2';

import keys from './keys'

const pool =  mysql.createPool(keys.database);

pool.getConnection(function(err,conn){
    console.log("DB Conected")
    });

export default pool;