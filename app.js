const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
  });
});

app.listen(1997, '127.0.0.1', () => {
  console.log('Server is listening to port 1997');
});
