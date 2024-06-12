const { Server } = require('http');

const server = new Server((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World!</title>
      <style>
        body {
          background-color: red;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        h1 {
          font-size: 3em;
        }
      </style>
    </head>
    <body>
      <h1>Hello World!</h1>
    </body>
    </html>
  `);
});

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
        <style>
          body {
            background-color: green;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            font-size: 3em;
          }
        </style>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
      </html>
    `,
  };
  callback(null, response);
};
