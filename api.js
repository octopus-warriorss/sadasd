const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

// Rota para obter o GIF da URL fornecida
app.get('/api/gif', async (req, res) => {
    try {
        const filePath = `${__dirname}/gif.gif`; // Obtém o caminho completo do arquivo gif.gif

        const gifContent = await fs.readFile(filePath);

        res.set('Content-Type', 'image/gif');
        res.send(gifContent);
    } catch (error) {
        console.error('Erro ao obter GIF:', error);
        res.status(500).send('Erro ao obter GIF');
    }
});

// Rota para obter o conteúdo bruto do arquivo pagina.txt
app.get('/api/raw', async (req, res) => {
    try {
        const filePath = `${__dirname}/pagina.txt`; // Obtém o caminho completo do arquivo pagina.txt

        const fileContent = await fs.readFile(filePath, 'utf-8');

        res.set('Content-Type', 'text/plain');
        res.send(fileContent);
    } catch (error) {
        console.error('Erro ao obter conteúdo bruto:', error);
        res.status(500).send('Erro ao obter conteúdo bruto');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
