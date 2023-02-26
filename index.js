const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
  try {
    let content;
    switch (req.url) {
      case '/':
        content = await fs.readFile('index.html', 'utf-8');
        break;
      case '/about':
        content = await fs.readFile('about.html', 'utf-8');
        break;
      case '/contact-me':
        content = await fs.readFile('contact-me.html', 'utf-8');
        break;
      default:
        content = await fs.readFile('404.html', 'utf-8');
        break;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write('500 Internal Server Error');
    res.end();
  }
});

server.listen(8080, () => {
  console.log('Listening on port 8080')
});
