import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700", "100", "300", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
function MyApp(props) {
  const { Component, pageProps } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
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
        <div className={roboto.className} style={{ visibility: mounted ? "visible" : "hidden" }}>
          <Component {...pageProps} />
        </div>
      </MantineProvider>
      {/* </ThemeProvider> */}
      {/* </CacheProvider> */}
    </>
  );
}

const mantineTheme = {
  // fontFamily: "Roboto",

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
    // fontFamily: "Roboto",
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
