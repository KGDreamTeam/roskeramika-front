import Document, {Html, Head, Main, NextScript} from "next/document";
import React from "react";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
        <div className="App" id="App">
          <Main/>
          <NextScript/>
        </div>
        </body>
      </Html>
    );
  }
}
