import SeatingCard from "../SeatingsCard/SeatingCard";
import { useDataDispatch } from "../../context/DataContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { ICardType } from "../../interfaces/interfaces";

const TableCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 750px) {
    justify-content: center;
  }
`;

const ListCards = ({type}: {type: ICardType}) => {
  const { tables } = useDataDispatch().state;
  return (
    <>
      <Typography variant="h6">Active Tables</Typography>
      <TableCardWrapper>
        {tables.map((table, index) => (
          <SeatingCard
            type={type}
            key={index}
            availability={table.availability}
            seats={table.seats}
            spaceNumber={table.tableNumber}
          />
        ))}
      </TableCardWrapper>
    </>
  );
};

export default ListCards;
