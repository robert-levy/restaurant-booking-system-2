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

interface SeatingCardsWrapperProps {
  type: "tables" | "bar";
}
const SeatingCardsWrapper = styled.div<SeatingCardsWrapperProps>`
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
      white-space: nowrap;
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer and Edge */
      padding-bottom: 20px;
      // @media (max-width: 750px) {
      // }
    `}
`;

const ListCards = ({ type }: { type: ICardType }) => {
  const { tables, bar } = useDataDispatch().state;
  const seatingType = type === "tables" ? "Tables" : "Bar Seats";
  return (
    <>
      <Typography variant="h6">Active {seatingType}</Typography>
      <SeatingCardsWrapper type={type}>
        {type === "tables" ? (
          <RenderTables tables={tables} />
        ) : (
          <RenderBarSeats bar={bar} />
        )}
      </SeatingCardsWrapper>
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
    <div style={{display:'flex', gap:'1vw',width:'-webkit-fill-available'}}>
      {bar.map((bar, index) => (
        <SeatingCard
          type="bar"
          key={`barSeat-${bar.barSeatNumber}__${index}`}
          availability={bar.availability}
          spaceNumber={bar.barSeatNumber}
        />
      ))}
    </div>
  );
};

export default ListCards;
