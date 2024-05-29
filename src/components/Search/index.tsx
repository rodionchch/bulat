import { Close, Search as SearchIcon } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

import {
  Search as SearchStyled,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";

type SearchType = {
  search: string;
  setSearch: (search: string) => void;
  clearSearch: () => void;
};

const Search: React.FC<SearchType> = ({ search, setSearch, clearSearch }) => {
  return (
    <SearchStyled>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={search}
        placeholder="Поиск сервера"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        endAdornment={
          <InputAdornment position="end" sx={{ paddingRight: "8px" }}>
            <IconButton
              sx={{ visibility: search ? "visible" : "hidden" }}
              onClick={clearSearch}
              edge="end"
              size="small"
            >
              <Close />
            </IconButton>
          </InputAdornment>
        }
      />
    </SearchStyled>
  );
};

export default Search;
