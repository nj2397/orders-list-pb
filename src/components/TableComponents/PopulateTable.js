import { React, useState, useEffect, useMemo, useCallback } from "react";
import data from "../../MOCK_DATA.json";
import TheTable from "./TableBody.js";
import { Container } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const PopulateTable = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate(); //to trigger Navigation
  const { enqueueSnackbar } = useSnackbar(); //to trigger Snackbar

  //** --- Table Header Fields --- */
  const columns = [
    { field: "orderId", headerName: "Order ID", width: "200" },
    { field: "vendorName", headerName: "Vendor Name", width: "200" },
    { field: "pickupDate", headerName: "Pick Up Date", width: "200" },
    { field: "status", headerName: "Status", width: "200" }
  ];

  //** --- Page Switch method --- */

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //** --- Fetch Orders and check Authenticity useEffect Method --- */

  useEffect(() => {
    if(!localStorage.getItem("username")){
      enqueueSnackbar("User must be logged in to access list", { variant: "warning" });
      navigate("/");
      return;
    }
  }, []);

  //** ---Render Method --- */
  return (
    <Container className="App">
          {data.length > 0 ? (
            <TheTable
              columns={columns}
              page={page}
              data={data}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              handleChangePage={handleChangePage}
            />
          ) : (
            <Container>No Orders Found</Container>
          )}
        </Container>
  )
};

export default PopulateTable;
