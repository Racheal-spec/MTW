import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { datarows } from "../Data/Data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { themes } from "../Theme";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { ProductSearchArray } from "../SearchFunc";
import { useState } from "react";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: themes.palette.primary.main,
    color: theme.palette.common.white,
    padding: "2px 15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "8px 5px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SingleDetail = ({ name, id, product }) => {
  const DetailsStyles = makeStyles((theme) => ({
    root: {
      flex: 10,
      padding: "110px 20px 0px 20px",
      [theme.breakpoints.down("sm")]: {
        padding: "50px 20px 0px 20px",
      },
    },
    heading: {
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    searchStyles: {
      width: "60%",
      height: "40px",
      border: `1px solid ${themes.palette.primary.main}`,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    testRoot: {
      width: "100%",
    },
    searchBox: {
      padding: "7px 13px",
    },
    space: {
      margin: "50px 0",
    },
    titlediv: {
      display: "flex",
      alignItems: "center",
    },
    headingdiv: {
      marginLeft: 100,
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
  }));
  const classes = DetailsStyles();

  const lists = product;

  const [value, setValue] = useState("");
  const [products, setProducts] = useState(lists);

  const handleSearch = (e) => {
    if (value.length > 2) {
      let search = ProductSearchArray(lists, value);
      setProducts(search);
    } else {
      setProducts(lists);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [value]);

  return (
    <div className={classes.root}>
      <div className={classes.titlediv}>
        <div>
          <h2 className={classes.heading}>Customer: {name}</h2>
        </div>
        <div>
          <h2 className={classes.headingdiv}>ID: {id}</h2>
        </div>
      </div>
      <div>
        <h2 className={classes.heading}>Product list</h2>
      </div>
      <div>
        <TextField
          type="search"
          variant="outlined"
          placeholder="Find customers..."
          InputProps={{
            className: classes.searchStyles,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton className={classes.searchBox} edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setValue(e.target.value)}
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
      <TableContainer component={Paper} className={classes.space}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Product</StyledTableCell>
              <StyledTableCell align="center">Unit Measure</StyledTableCell>
              <StyledTableCell align="center">Part Number</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((list) => (
              <StyledTableRow key={list.item}>
                <StyledTableCell align="center">{list.item}</StyledTableCell>
                <StyledTableCell align="center">{list.unit}</StyledTableCell>
                <StyledTableCell align="center">{list.partno}</StyledTableCell>
                <StyledTableCell align="center">{list.qty}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const Details = () => {
  let { id } = useParams();

  if (id) {
    let tabledata = datarows.find((row) => {
      return row.id === parseInt(id);
    });
    if (tabledata) {
      return (
        <>
          <SingleDetail {...tabledata} key={id} />
        </>
      );
    }
    return null;
  }
};

export default Details;
