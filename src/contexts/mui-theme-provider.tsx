import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import { colors } from "src/styles/colors";

// todo: configure common themes
const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(1px)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          border: " solid 1px #e5e4e2",
          borderRadius: 0,
          color: "black",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: 1000,
        },
      },
    },
  },
});

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
