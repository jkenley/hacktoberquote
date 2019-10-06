import React from "react";
import App from "next/app";
import { DefaultSeo } from "next-seo";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <DefaultSeo
          title="Hacktoberquote - Open source programming quotes"
          description="Open source programming quotes."
          additionalMetaTags={[
            {
              name: "keywords",
              content:
                "hacktoberquote, hacktoberfest, open source, programming quotes"
            }
          ]}
        />
        <Component />
      </>
    );
  }
}
