import createTheme from "@mui/material/styles/createTheme";

export const bodyTheme = createTheme({
  typography: {
    htmlFontSize: 8,
    button: {
      fontSize: "2rem",
    },
  },
  palette: {
    primary: {
      main: "rgb(48, 48, 48)",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "rgb(48, 48, 48)",
    },
    success: {
      main: "#4caf50",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          width: "2em",
          fontSize: "2em",
          alignItems: "center",
          direction: "ltr",
        },
      },
    },
  },
});

export const headerTheme = createTheme({
  typography: {
    htmlFontSize: 8,
    button: {
      fontSize: "2rem",
    },
  },
  palette: {
    primary: {
      main: "rgb(32, 32, 32)",
    },
    secondary: {
      main: "#b3b300",
    },
    info: {
      main: "#ffffff",
    },
  },
});
