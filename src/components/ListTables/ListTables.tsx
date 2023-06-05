import TableCard from "../TableCard/TableCard";
import { useDataDispatch } from "../../context/DataContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const TableCardWrapper = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  justify-content:end;
`

const ListTables = () => {
  const { tables } = useDataDispatch().state;
  return (
    <>
    <Typography variant="h6">Active Tables</Typography>
    <TableCardWrapper>
      {tables.map((table, index) => (
        <TableCard
          key={index}
          availability={table.availability}
          seats={table.seats}
          tableNumber={table.tableNumber}
        />
      ))}
    </TableCardWrapper>
    </>);
};

export default ListTables;
