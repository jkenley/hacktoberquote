import React from "react";
import App from "next/app";
import { DefaultSeo } from "next-seo";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <DefaultSeo
          title="Hacktoberquote - Quotes about open source software and team collaboration."
          description="Quotes about open source software and team collaboration."
          additionalMetaTags={[
            {
              name: "keywords",
              content:
                "hacktoberquote, hacktoberfest, open source software quotes, team collaboration quotes"
            }
          ]}
        />
        <Component />
      </>
    );
  }
}
