const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PUERTO_FRONT || 3000;

// Habilitar CORS
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Ruta para inyectar variables al frontend
app.get('/env.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.send(`window.ENV = { PUERTO_BACK: "${process.env.PUERTO_BACK || 8000}", API: "${process.env.API || 'http://localhost'}" };`);

});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend disponible en http://localhost:${port}`);
});
