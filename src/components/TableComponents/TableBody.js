import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useStyles } from "../customStyles.js";
import ListBody from "./ListBody.js";
import SearchBar from "../SearchBar.js";
import Pagination from "../Pagination.js";

const TheTable = ({
  columns,
  page,
  data,
  rowsPerPage,
  handleChangePage,
}) => {
  const classes = useStyles();

  const [list, setList] = useState(data); // for store all orders
  
  //** ---Render Method --- */

  return (
    <Container maxWidth="lg">
      {/* --- SearchBar Component --- */}
      <SearchBar
        classes={classes}
        list={list}
        setList={setList}
        data={data}
        handleChangePage={handleChangePage}
      />

      {/* --- Body Implementation --- */}

      {list.length > 0 ? ( //conditional body
        <>
          <TableContainer>
            <Table sx={{ minWidth: 500 }}>
              <TableHead>
                <TableRow>
                  {/* ---Mapping up the Header Titles (Name, Email, ...)--- */}

                  {columns.map((row) => (
                    <TableCell
                      key={row.field}
                      style={{ width: 200 }}
                      align="justify"
                    >
                      <strong>{row.headerName}</strong>
                    </TableCell>
                  ))}

                </TableRow>
              </TableHead>

              <TableBody>
                {/* ---Listing out orders in row--- */}

                <ListBody
                  rowsPerPage={rowsPerPage}
                  page={page}
                  list={list}
                  setList={setList}
                  classes={classes}
                />
                {/* ---------------------------- */}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ---Pagination--- */}

          <Pagination
            classes={classes}
            count={list.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
          />
        </>
      ) : (
        // To display "No Orders Found" in case of No Match
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%"
          }}
          my={5}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="subtitle1" my={3}>
              No Orders found
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

TheTable.propTypes = {
  columns: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setList: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired
};

export default TheTable;
