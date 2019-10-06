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
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="/static/images/icon-48x48.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/icofont/icofont.min.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
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
