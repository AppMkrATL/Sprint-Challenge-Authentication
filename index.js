const { server } = require('./server');

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port} === \n`);
});
