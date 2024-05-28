import { CssBaseline } from "@mui/material";
import Router from "./Router";

import AppBar from "components/AppBar";

const App = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <AppBar />
      <Router />
    </>
  );
};

export default App;
