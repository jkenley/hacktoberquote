import Document, { Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

export default class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const isProduction = process.env.NODE_ENV === "production";
  //     const initialProps = await Document.getInitialProps(ctx);

  //     return { ...initialProps, isProduction };
  //   }

  //   setGoogleTags() {
  //     return {
  //       __html: `
  //         window.dataLayer = window.dataLayer || [];
  //         function gtag(){dataLayer.push(arguments);}
  //         gtag('js', new Date());
  //         gtag('config', 'UA-146292506-1');
  //       `
  //     };
  //   }

  render() {
    // const { isProduction } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/icofont/icofont.min.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {false && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id="
              />
              {/* <script dangerouslySetInnerHTML={this.setGoogleTags()} /> */}
            </Fragment>
          )}
        </body>
      </html>
    );
  }
}
