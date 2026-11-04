const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Talbai App Backend is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});