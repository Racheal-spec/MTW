import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { themes } from "../../Theme";
import logo from "../../Assets/logo-cor.svg";
import { SEARCH } from "../../Routes";

function Sidebar() {
  const SidebarStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      flex: 2,
      backgroundColor: themes.palette.primary.white,
      height: "100vh",
      padding: "20px 15px",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        height: "100%",
      },
    },
    navul: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      listStyle: "none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
      },
    },
    navmenu: {
      display: "flex",
      textDecoration: "none",
      fontWeight: 500,
      margin: "24px 0",
      color: themes.palette.primary.dark,
      transition: "all 0.3s ease-out",
      padding: "5px 35px",
      "&:hover": {
        border: `1px solid ${themes.palette.primary.main} `,
        padding: "5px 35px",
        borderRadius: 12,
      },
      [theme.breakpoints.down("sm")]: {
        padding: "5px 15px",
        fontSize: 10,
      },
    },
    linklist: {
      //margin: "0 10px",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
  }));

  const classes = SidebarStyles();

  return (
    <div className={classes.root}>
      <div>
        <img src={logo} alt="maketheway-logo" />
      </div>
      <div className={classes.navul}>
        <Link to="/" className={classes.navmenu}>
          <li className={classes.linklist}>Application 1</li>
        </Link>
        <Link to="/" className={classes.navmenu}>
          <li className={classes.linklist}>Application 2</li>
        </Link>
        <Link to="/" className={classes.navmenu}>
          <li className={classes.linklist}>Application 3</li>
        </Link>
        <Link to={SEARCH} className={classes.navmenu}>
          <li className={classes.linklist}>Customer Search</li>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
