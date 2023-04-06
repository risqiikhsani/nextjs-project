// import '@/styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import type { AppProps } from 'next/app';
import { useState } from 'react';
import createEmotionCache from '../src/createEmotionCache';
import { roboto } from './_document';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export const defaultColor = {
  primary: {
    main: '#556cd6',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: red.A400,
  },
}

export default function App(props: MyAppProps) {
  const theme = createTheme({
    palette: {
      mode: 'light',
      ...defaultColor
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      // Name of the component ⚛️
      MuiButtonBase: {
        defaultProps: {
          // The default props to change
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            height: '70px',
          },
        },
      },
    },
  });

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}
