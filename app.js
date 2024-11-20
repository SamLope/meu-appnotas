const express = require('express');
const app = express();
const port = 8103; // Porta de escuta da aplicação

// Middleware para parsear JSON
app.use(express.json());

// Array para simular um banco de dados de notas
let notes = [];

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Notas!');
});

// Criar uma nova nota
app.post('/notes', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios!' });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// Listar todas as notas
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Excluir uma nota
app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex((note) => note.id === parseInt(id));

  if (noteIndex === -1) {
    return res.status(404).json({ error: 'Nota não encontrada!' });
  }

  notes.splice(noteIndex, 1);
  res.status(200).json({ message: 'Nota deletada com sucesso!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
