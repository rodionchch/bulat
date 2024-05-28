import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

import themeColor from "constants/themeColor";
import colors from "constants/colors";

type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: typeof themeColor.LIGHT | typeof themeColor.DARK;
};

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: themeColor.DARK,
});

const useApp = () => {
  const [mode, setMode] = useState<
    typeof themeColor.LIGHT | typeof themeColor.DARK
  >(themeColor.DARK);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === themeColor.LIGHT ? themeColor.DARK : themeColor.LIGHT
        );
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: colors.main,
          },
        },
      }),
    [mode]
  );

  return { colorMode, theme };
};

export default useApp;
