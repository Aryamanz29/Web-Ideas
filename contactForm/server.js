const express = require('express');
const sendMail = require('./mail');
const path = require('path');
const App = express();



const PORT = 8080;

App.use(express.urlencoded({ extended: false }));
App.use(express.json());

App.post('/email', (req,res) => {
  //Send EMAIL here

  const { subject, email, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(email, subject, text, function(err, data) {
    if(err) {
      res.status(500).json({message: 'Internal Error'});
    }
    else {
      res.json({ message: 'Email Sent!!'});
    }
  });
});

App.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

App.listen(PORT, () => {
  console.log('Server is running on port, ', 8080);
});
