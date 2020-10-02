import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-us">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>denosaurabh - pwa</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/favicon.ico"
            rel="icon"
            type="image/x-icon"
            sizes="16x16"
          />
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
