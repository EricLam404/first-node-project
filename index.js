const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(async (req, res) => {
  let url = req.url;

  if(url == "/"){
    const content = await fs.readFile('index.html', 'utf-8');
    res.send(content);
  }
  else if(url == "/about"){
    const content = await fs.readFile('about.html', 'utf-8');
    res.send(content);
  }
  else if(url == "/contact-me"){
    const content = await fs.readFile('contact-me.html', 'utf-8');
    res.send(content);
  }
  else{
    const content = await fs.readFile('404.html', 'utf-8');
    res.send(content);
  }
  
});

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
