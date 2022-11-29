import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element
}
enum colorsBanorte {
  red = '#EB0029',
  grey = '#5B6670',
  greyDark = '#323E48',
  content2 = '#7B868C',
  content3 = '#A2A9AD',
  content4 = '#C1C5C8',
  content5 = '#CFD2D3',
  background = '#EBF0F2',
  background2 = '#FCFCFC',
  positive = '#6CC04A',
  alert = '#FF671B',
  avisos = '#FFA400'

}

enum themePalette {
  BG = "#12181b",
  LIME = "#C8FA5F",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  //alert styles
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG
    },
    primary: {
      main: themePalette.LIME
    }
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em"
        }
      }
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em"
        }
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN
        },
        standardSuccess: {
          border: `1px solid ${themePalette.SUCCESS_MAIN}`,
          background: themePalette.BG_SUCCESS_MAIN
        }
      }
    }
  }
})
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}