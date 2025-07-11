const express = require('express');
const path = require('path');
const cors = require('cors');  // Para permitir peticiones desde cualquier origen

const app = express();
const port = 3000;

// Habilitar CORS desde cualquier origen
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir cualquier ruta desconocida al index.html (opcional, útil para SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Frontend disponible en http://localhost:${port}`);
});

