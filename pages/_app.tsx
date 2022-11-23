import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      theme={{
        ...mantineTheme,
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
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
