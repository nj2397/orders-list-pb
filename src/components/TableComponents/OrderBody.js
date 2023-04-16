import React from "react";
import PropTypes from "prop-types";
import {
  TableCell
} from "@mui/material";

const Order = (props) => {
  const { row } = props;

  //** --- Render Method --- */
  return (
    <>
      <TableCell style={{ width: 200 }} align="left">
        {row.orderid}
      </TableCell>

      <TableCell style={{ width: 200 }} align="left">
        {row.vendor_name}
      </TableCell>

      <TableCell style={{ width: 200 }} align="left">
          {row.pickup_date}
      </TableCell>

      <TableCell style={{ width: 50 }} align="left">
        {row.status}
      </TableCell>
    </>
  );
};

Order.propTypes = {
  row: PropTypes.func.isRequired
};

export default Order;
