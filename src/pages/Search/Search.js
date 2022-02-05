import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Theme";
import { IconButton, InputBase, Table } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import DataTable from "../../components/DataTable";

const Search = () => {
  const SearchStyles = makeStyles((theme) => ({
    root: {
      flex: 10,
      padding: "110px 20px 0px 20px",
    },
    heading: {
      fontWeight: 500,
    },
    searchStyles: {
      width: "60%",
      height: "40px",
      border: `1px solid ${themes.palette.primary.main}`,
    },
    testRoot: {
      width: "100%",
      borderRadius: 20,
    },
    searchBox: {
      padding: "7px 13px",
    },
    space: {
      margin: "50px 0",
    },
  }));
  const classes = SearchStyles();
  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.heading}>Customer Search</h2>
      </div>
      <div>
        <TextField
          type="search"
          variant="outlined"
          placeholder="Find customers..."
          disableRipple
          InputProps={{
            className: classes.searchStyles,
            endAdornment: (
              <InputAdornment>
                <IconButton
                  classes={classes.searchBox}
                  //onClick={() => handleSearch()}
                  edge="end"
                  //disabled={!Boolean(value)}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          //onChange={(e) => setValue(e.target.value)}
          classes={{ root: classes.testRoot }}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              // Do code here
              ev.preventDefault();
              //handleSearch();
            }
          }}
        />
      </div>
      <div className={classes.space}>
        <DataTable />
      </div>
    </div>
  );
};

export default Search;
