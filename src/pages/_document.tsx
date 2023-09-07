import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
