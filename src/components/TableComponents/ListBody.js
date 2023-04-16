import PropTypes from "prop-types";
import { TableRow } from "@mui/material";
import Order from "./OrderBody.js";

//** ----Table Body for Orders List----- */

const ListBody = (props) => {
  const {
    rowsPerPage,
    page,
    list,
    setList,
  } = props;

  return ( rowsPerPage > 0
    ? list.slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      )
    : list
  ).map((row) => (
    <TableRow
      hover
      key={row.orderid}
    >
      <Order
        row={row}
        setList={setList}
      />
    </TableRow>
  ));
};

ListBody.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
  classes: PropTypes.func.isRequired,
};

export default ListBody;
