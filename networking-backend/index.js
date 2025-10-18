const express = require('express');
const app = express();

app.get('/getdata', (req, res) => {
  res.status(200).json({ message: 'Ho gaya' });
});
app.listen(5000, () => {
  console.log('listening on server');
});
