import { React, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { theme } from "./customStyles.js";

const SearchBar = ({ classes, handleChangePage, list, setList, data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  //** --- Keystroke Debouncing --- */

  const handleQueryChange = (event) => {
    handleChangePage(event, 1);
    let timer;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      setSearchQuery(event.target.value);
    }, 1000);
  };

  //** --- Method to filter orders list --- */

  const filterList = () => {
    let newArr = [];

    newArr = data.filter(
      (ele) =>
        ele.orderid.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ele.vendor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ele.pickup_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ele.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setList(newArr);
    return;
  };

  //** ---To initiate search regarding any input query--- */
  const findQueries = () => {
    // If search field empty
    if (!searchQuery) {
      setList(data);
    }

    // To list out the searched orders
    if (searchQuery) {
      setList([]);
      filterList();
      return;
    }
  };

  useEffect(() => {
    findQueries(); //To initiate the query method
  }, [searchQuery, list.length]);

  //** --- Render Method --- */

  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        onChange={handleQueryChange}
        placeholder="Search"
        className={classes.root}
      />
    </ThemeProvider>
  );
};

export default SearchBar;
