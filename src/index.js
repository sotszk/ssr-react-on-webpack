import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from './public/components/HelloWorld';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  const myname = 'Sota Suzuki';

  const component = ReactDOMServer.renderToString(<HelloWorld name={myname} />);

  const html = `
  <!DOCTYPE HTML>
    <html>
      <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify({
          name: myname,
        })}</script>
      </head>
      <body>
        <div id="root">${component}</div>
        <script src="/static/home.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000);
