import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {/* <CacheProvider value={clientSideEmotionCache}> */}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <ThemeProvider theme={"dark"}> */}
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        theme={{
          ...mantineTheme,
        }}
      >
        {/* <CssBaseline /> */}
        <div style={{ visibility: mounted ? "visible" : "hidden" }}>
          <Component {...pageProps} />
        </div>
      </MantineProvider>
      {/* </ThemeProvider> */}
      {/* </CacheProvider> */}
    </>
  );
}

const mantineTheme = {
  fontFamily: "Roboto",

  fontSizes: {
    xs: 10,
    sm: 12,
    md: 12, //dropdown and menu text size
    lg: 16,
    xl: 24,
  },

  headings: {
    sizes: {
      h1: { fontSize: 40 },
      h2: { fontSize: 24 },
      h3: { fontSize: 16 },
      h4: { fontSize: 14 },
    },
    fontFamily: "Roboto",
  },
  radius: {
    lg: 0,
    xl: 0,
    md: 0,
    sm: 0,
    xs: 0,
  },
};

export default MyApp;
