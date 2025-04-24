import express from 'express';
import cors from 'cors';
import { db } from './connect.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Se a porta não estiver no .env, usa 3000

app.use(cors());

// Endpoint principal
app.get('/', (req, res) => {
    res.send('Só vamos trabalhar com os endpoints "/artists" e "/songs"');
});

// Endpoint para obter artistas
app.get('/artists', async (req, res) => {
    try {
        const artists = await db.collection('artists').find({}).toArray();
        res.status(200).send(artists);
    } catch (error) {
        res.status(500).send('Erro ao buscar artistas');
    }
});

// Endpoint para obter músicas
app.get('/songs', async (req, res) => {
    try {
        const songs = await db.collection('songs').find({}).toArray();
        res.status(200).send(songs);
    } catch (error) {
        res.status(500).send('Erro ao buscar músicas');
    }
});

// Inicia o servidor após garantir a conexão
app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});
