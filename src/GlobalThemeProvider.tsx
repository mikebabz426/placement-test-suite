import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f289fe",
    },
    secondary: {
      main: "#4b636e",
    },
  },
})

const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemeProvider
