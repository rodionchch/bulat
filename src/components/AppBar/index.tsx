import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { AppBar as AppBarMUI, Box, Toolbar, IconButton } from "@mui/material";
import {
  Brightness7 as BrightnessLightIcon,
  Brightness4 as BrightnessDarkIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import paths from "constants/paths";
import tableStore from "stores/table";
import { ColorModeContext } from "root/useApp";
import themeColor from "constants/themeColor";

const AppBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { search, setSearch } = tableStore;
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

          <Box sx={{ flexGrow: 1 }} />

          {pathname === paths.home && (
            <>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  value={search}
                  placeholder="Поиск"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
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
