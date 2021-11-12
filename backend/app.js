const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, ,PUT, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added'
  });
});
//CxTAqwZ76VAj8k4c

app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: '111', title: 'server post', content: 'this is from the server'
    },
    {
      id: '654', title: '2server post', content: 'this is from the server'
    },
    {
      id: '894615', title: '3server post', content: 'this is from the server'
    }
  ];
  res.status(200).json(posts);
});

module.exports = app;
