import mssql from 'mssql';
import dontev from 'dotenv';
dontev.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.SERVER,
    options: {
        encrypt: false, 
        trustServerCertificate: true 
    }
};

export const getConnections = async () => {
    try {
        const pool = await mssql.connect(config);
        return pool;
    } catch (error) {
        throw new Error(error);
    }
};