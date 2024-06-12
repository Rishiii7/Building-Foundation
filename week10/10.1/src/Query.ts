import { Client } from "pg";

const createClient = () => {
    return new Client({
        connectionString : `postgresql://neondb_owner:v6T2ifyNgjWa@ep-twilight-lab-a5uq1lm1.us-east-2.aws.neon.tech/neondb?sslmode=require`
    })
}


const joinQuery = `
    SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
    FROM users u
    JOIN addressess a ON u.id = a.user_id
    WHERE u.id = $1
`

export const joinFunction = async (id: number) => {
    const client = createClient();

    try{
        await client.connect();
        const values = [id];
        const result = await client.query(joinQuery, values);
        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }

    } catch (error) {
        console.log(`Cannot get the qeury result : ${error}`);
    } finally {
        await client.end();
    }
}