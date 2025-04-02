// crud operations

// create
// read
// update
// delete
// todo

const express = require('express');
const app = express();
const port = 3001;

app.get('/api/contact', (req, res) => {
  res.send('Hello World');
});
app.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
