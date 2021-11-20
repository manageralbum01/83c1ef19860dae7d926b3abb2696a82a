import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { GlobalStyles } from './index.styles'

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
})

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
