import { CssBaseline, ThemeProvider } from "@mui/material";

import Router from "./Router";
import AppBar from "components/AppBar";

import useApp, { ColorModeContext } from "./useApp";

const App = () => {
  const { colorMode, theme } = useApp();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <AppBar />
        <Router />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
