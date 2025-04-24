import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI;

if (!URI) {
    console.error('A variável MONGO_URI não está definida!');
    process.exit(1); // Encerra o servidor se a variável não estiver definida
}

const client = new MongoClient(URI);

export const db = client.db('spotifyAula'); // Banco de dados 'spotifyAula' no MongoDB
