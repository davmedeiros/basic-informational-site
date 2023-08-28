const http = require('http');
const fs = require('fs/promises');

const serve = async (page) => {
  try {
    await http
      .createServer(async (req, res) => {
        let pathname = await '';

        if (req.url === '/') {
          pathname = await `./src/index.html`;
        } else {
          pathname = await `./src/html/${req.url}.html`;
        }

        let data = await '';

        try {
          data = await fs.readFile(pathname, {
            encoding: 'utf8',
          });
          res.writeHead(200, { 'Content-Type': 'text/html' });
        } catch (error) {
          data = await fs.readFile('./src/html/404.html', {
            encoding: 'utf8',
          });
          res.writeHead(404, { 'Content-Type': 'text/html' });
          console.log(error);
        }

        res.write(data);
        res.end();
      })
      .listen(8080);

    console.log(`Running at http://localhost:8080`);
  } catch (error) {
    console.log(error);
  }
};

serve('/');
