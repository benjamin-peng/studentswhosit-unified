import { Pool } from 'pg';
require('dotenv').config();


const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: 'postgres',
    password: process.env.PASSWORD,
    port: 5433,
  });
  
  export default pool