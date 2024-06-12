import { Client } from "pg";


const createClient = () => {
    return new Client({
        connectionString : 'postgresql://neondb_owner:v6T2ifyNgjWa@ep-twilight-lab-a5uq1lm1.us-east-2.aws.neon.tech/neondb?sslmode=require'
    });
}

const createQuery = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
`

const insertQuery = `
    INSERT INTO users (username, password, email)
    VALUES ($1, $2, $3);
`

const buildUpdateQuery = (
    columnName : string
) => {
    const updateQuery = `
        UPDATE users
        SET ${columnName} = $1
        WHERE id = $2
    `
    return updateQuery;
}

const deleteQuery = `
    DELETE FROM users
    WHERE id = $1
`

export const createTable = async () => {
    const client = createClient();
    try{
        
        await client.connect();

        const result = await client.query(createQuery);

        console.log(`Table Created : ${result}`);

    } catch (error) {
        console.error(`Cannot create table : ${error}`);
    } finally {
        await client.end();
    }
}

type Users = {
    username : string;
    password : string;
    email : string;
}

export const insertIntoTable = async (user : Users) =>{
    const client = createClient();
    try{
        
        await client.connect();

        const values = [user.username, user.password, user.email];

        const result = await client.query(insertQuery, values);

        console.log(`Inserted into the table : ${result.rows[0]}`);
    } catch (error) {
        console.error(`Data cannot be inserted : ${error}`);
    } finally {
        await client.end();
    }
}

export const updateTable = async (
    columnName: string,
    columnValue : string,
    id : number
) => {
    const client = createClient();

    try{
        await client.connect();
        const values = [columnValue, id];

        const updateQuery = buildUpdateQuery(columnName);

        const result = await client.query(updateQuery, values);

        console.log(`Updated the values : ${result.rowCount}`);
    } catch (error) {
        console.error(`Cannot update the value : ${error}`);
    } finally {
        await client.end();
    }
}

export const deleteRow = async (id : number) => {
    const client = createClient();

    try{
        await client.connect();

        const values = [id];

        const result = await client.query(deleteQuery, values);

        console.log(`Deleted the specific row : ${result}`);

    } catch (error) {
        console.error(`Cannot delete the row : ${error}`);
    } finally {
        await client.end();
    }
}