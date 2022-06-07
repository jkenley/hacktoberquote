import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-149489768-1');
        `
    };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-149489768-1"
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </body>
      </Html>
    );
  }
}
