import { Client } from 'pg';

const client = new Client({
  connectionString:"postgresql://swetashreya004:8nSVaFZmGXc2@ep-rapid-snowflake-a1yj929b.ap-southeast-1.aws.neon.tech/sweta?sslmode=require"
})

async function connect(){ 
  await client.connect();
}

async function createPostTable(){
  connect();//jb bhi oopr wala function call ho vo tb hi ho jb'connect' fucntion chale
  const query = `CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    postname VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )`
  let result = await client.query(query);
  console.log(result);
}
createPostTable();