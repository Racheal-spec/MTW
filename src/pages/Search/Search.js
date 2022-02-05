import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Theme";

const Search = () => {
  const SearchStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flex: 10,
      backgroundColor: themes.palette.primary.main,
      padding: "10px 20px",
    },
  }));
  const classes = SearchStyles();
  return (
    <div className={classes.root}>
      <p>Searchhh</p>
    </div>
  );
};

export default Search;
