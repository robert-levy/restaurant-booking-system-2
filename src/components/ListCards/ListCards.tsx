import SeatingCard from "../SeatingsCard/SeatingCard";
import { useDataDispatch } from "../../context/DataContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import {
  IBarSeat,
  ICardType,
  IRestaurantTable,
} from "../../interfaces/interfaces";
import { css } from "@emotion/react";

interface TableCardWrapperProps {
  type: "tables" | "bar";
}
const TableCardWrapper = styled.div<TableCardWrapperProps>`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 20px;
  @media (max-width: 750px) {
    justify-content: center;
  }
  ${(props) =>
    props.type === "bar" &&
    css`
      flex-wrap: nowrap;
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer and Edge */
      padding:20px 0;
    `}
`;

const ListCards = ({ type }: { type: ICardType }) => {
  const { tables, bar } = useDataDispatch().state;
  const seatingType = type === "tables" ? "Tables" : "Bar Seats";
  return (
    <>
      <Typography variant="h6">Active {seatingType}</Typography>
      <TableCardWrapper type={type}>
        {type === "tables" ? (
          <RenderTables tables={tables} />
        ) : (
          <RenderBarSeats bar={bar} />
        )}
      </TableCardWrapper>
    </>
  );
};

const RenderTables = ({ tables }: { tables: IRestaurantTable[] }) => {
  return (
    <>
      {tables.map((table, index) => (
        <SeatingCard
          type="tables"
          key={`table-${table.tableNumber}__${index}`}
          availability={table.availability}
          seats={table.seats}
          spaceNumber={table.tableNumber}
        />
      ))}
    </>
  );
};

const RenderBarSeats = ({ bar }: { bar: IBarSeat[] }) => {
  return (
    <>
      {bar.map((bar, index) => (
        <SeatingCard
          type="bar"
          key={`barSeat-${bar.barSeatNumber}__${index}`}
          availability={bar.availability}
          spaceNumber={bar.barSeatNumber}
        />
      ))}
    </>
  );
};

export default ListCards;
