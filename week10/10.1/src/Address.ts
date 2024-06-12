import { Client } from "pg";

const createClient = () => {
    return new Client({
        connectionString : `postgresql://neondb_owner:v6T2ifyNgjWa@ep-twilight-lab-a5uq1lm1.us-east-2.aws.neon.tech/neondb?sslmode=require`
    })
}

const createQuery = `
    CREATE TABLE IF NOT EXISTS addressess (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(50) NOT NULL,
        country VARCHAR(50) NOT NULL,
        street VARCHAR(50) NOT NULL,
        pincode VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
`

const insertQuery = `
    INSERT INTO addressess (city, country, street, pincode, user_id)
    VALUES ($1, $2, $3, $4, $5);
`

export const createAddressTable = async () => {
    const client = createClient();

    try {
        await client.connect();

        const result = await client.query(createQuery);

        console.log(`Table created`);
    } catch(error) {
        console.error(`Cannot create table : ${error}`);
    } finally {
        await client.end();
    }
}

export const insertIntoAddressTable = async (
    city : string,
    country : string,
    street : string,
    pincode : string,
    id : number
) => {

    const client = createClient();

    try{
        await client.connect();

        const values = [city, country, street, pincode, id];
        const result = await client.query(insertQuery, values);

        console.log(`Inserted into the table`);
    } catch(error) {
        console.error(`Cannot insert the data into the table : ${error}`);
    } finally {
        await client.end();
    }

}
