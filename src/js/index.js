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
          pathname = await `./src/html/${req.url}`;
        }

        const data = await fs.readFile(pathname, {
          encoding: 'utf8',
        });

        res.writeHead(200, { 'Content-Type': 'text/html' });
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
