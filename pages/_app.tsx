import React from "react";
import App, { Container } from "next/app";
// import Router from "next/router";
import { DefaultSeo } from "next-seo";
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
      <Container>
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
      </Container>
    );
  }
}
