import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import SeatingCard from "../SeatingsCard/SeatingCard";
import { useDataDispatch } from "../../context/DataContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
const TableCardWrapper = styled.div `
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 20px;
  @media (max-width: 750px) {
    justify-content: center;
  }
  ${(props) => props.type === "bar" &&
    css `
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer and Edge */
      padding: 20px 0;
      // @media (max-width: 750px) {
      // }
    `}
`;
const ListCards = ({ type }) => {
    const { tables, bar } = useDataDispatch().state;
    const seatingType = type === "tables" ? "Tables" : "Bar Seats";
    return (_jsxs(_Fragment, { children: [_jsxs(Typography, { variant: "h6", children: ["Active ", seatingType] }), _jsx(TableCardWrapper, { type: type, children: type === "tables" ? (_jsx(RenderTables, { tables: tables })) : (_jsx(RenderBarSeats, { bar: bar })) })] }));
};
const RenderTables = ({ tables }) => {
    return (_jsx(_Fragment, { children: tables.map((table, index) => (_jsx(SeatingCard, { type: "tables", availability: table.availability, seats: table.seats, spaceNumber: table.tableNumber }, `table-${table.tableNumber}__${index}`))) }));
};
const RenderBarSeats = ({ bar }) => {
    return (_jsx(_Fragment, { children: bar.map((bar, index) => (_jsx(SeatingCard, { type: "bar", availability: bar.availability, spaceNumber: bar.barSeatNumber }, `barSeat-${bar.barSeatNumber}__${index}`))) }));
};
export default ListCards;
