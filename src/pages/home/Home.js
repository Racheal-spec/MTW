import React from "react";
import { makeStyles } from "@mui/styles";
import { themes } from "../../Theme";

const Home = () => {
  const HomeStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flex: 10,
      backgroundColor: themes.palette.primary.main,
      padding: "10px 20px",
    },
  }));
  const classes = HomeStyles();
  return (
    <div className={classes.root}>
      <p>Home</p>
    </div>
  );
};

export default Home;
