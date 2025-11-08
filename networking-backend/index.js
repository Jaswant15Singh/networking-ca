const express = require('express');
const app = express();

app.get('/getdata', (req, res) => {
  res.status(200).json({ message: 'Ho gaya hai bhai' });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'for testing purpose' });
});
app.listen(5000, () => {
  console.log('listening on server');
});
