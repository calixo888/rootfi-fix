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
        <link rel="shortcut icon" href="../RootFi Integrate Shortform Favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
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
