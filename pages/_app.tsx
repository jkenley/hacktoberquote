import React from "react";
import App from "next/app";
import { DefaultSeo } from "next-seo";
// import Router from "next/router";
// import { trackPageView } from "../helpers";

export default class MyApp extends App {
  //   componentDidMount() {
  //     Router.onRouteChangeComplete = url => {
  //       trackPageView(url);
  //     };
  //   }

  render() {
    const { Component } = this.props;

    return (
      <>
        <DefaultSeo
          title="Hacktoberquote"
          description="Open source programming quotes."
          additionalMetaTags={[
            {
              name: "keywords",
              content:
                "Hacktoberquote, hacktoberfest, open sources programming quotes"
            }
          ]}
        />
        <Component />
      </>
    );
  }
}
