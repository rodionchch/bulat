import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { AppBar as AppBarMUI, Box, Toolbar, IconButton } from "@mui/material";
import {
  Brightness7 as BrightnessLightIcon,
  Brightness4 as BrightnessDarkIcon,
} from "@mui/icons-material";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ColorModeContext } from "root/useApp";
import themeColor from "constants/themeColor";
import Search from "components/Search";
import tableStore from "stores/table";
import paths from "constants/paths";

const AppBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { search, setSearch, clearSearch } = tableStore;
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="static">
        <Toolbar>
          <Box
            sx={{
              marginRight: "12px",
              paddingTop: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(paths.home);
            }}
          >
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 5 }} />

          {pathname === paths.home && (
            <>
              <Search
                search={search}
                setSearch={setSearch}
                clearSearch={clearSearch}
              />
              <Box sx={{ flexGrow: 6 }} />
            </>
          )}

          <IconButton
            size="large"
            aria-label="change theme"
            color="inherit"
            onClick={() => {
              colorMode.toggleColorMode();
            }}
          >
            {colorMode.mode === themeColor.DARK ? (
              <BrightnessLightIcon />
            ) : (
              <BrightnessDarkIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
};

export default observer(AppBar);
