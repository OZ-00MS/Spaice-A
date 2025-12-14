// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve your 3D site files from "public"
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`3D site running at http://localhost:${port}`);
});
