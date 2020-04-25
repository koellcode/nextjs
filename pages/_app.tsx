import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createClient, Provider } from "urql";

import { GlobalStyle, theme } from "../etc/styles";

const client = createClient({ url: "/api/graphql" });

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider value={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
