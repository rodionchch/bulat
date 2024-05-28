import AppBarMUI from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";

import { ReactComponent as Logo } from "assets/images/logo.svg";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import paths from "constants/paths";

const AppBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
                  placeholder="Поиск"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
            </>
          )}

          <IconButton size="large" aria-label="change theme" color="inherit">
            <MailIcon />
          </IconButton>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
};

export default AppBar;
