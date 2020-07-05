import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from './public/components/HelloWorld';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/', (_req, res) => {
  const myname = 'Sota Suzuki';

  const stream = ReactDOMServer.renderToNodeStream(
    <HelloWorld name={myname} />
  );

  const htmlStart = `
  <!DOCTYPE HTML>
    <html>
      <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify({
          name: myname,
        })}</script>
      </head>
      <body>
        <div id="root">`;

  res.write(htmlStart);
  stream.pipe(res, { end: false });

  const htmlEnd = `
        </div>
        <script src="/static/home.js"></script>
      </body>
    </html>
  `;

  stream.on('end', () => {
    res.write(htmlEnd);
    res.end();
  });
});

app.listen(3000);
