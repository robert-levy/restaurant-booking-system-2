import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Paper, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ListCards from "../ListCards/ListCards";
const StyledPaper = styled(Paper) `
  background: #eee;
  padding: 5% 5%;
  gap: 5%;
  margin-top: 2px;
`;
const Wrapper = styled.div `
  
`;
const BarSection = styled.div ``;
const TablesSection = styled.div ``;
const RestaurantFoyer = ({ branchName }) => {
    return (_jsxs(StyledPaper, { children: [_jsxs(Typography, { variant: "h5", children: [branchName, " Foyer"] }), _jsx(Divider, { style: { margin: "2% 5%" } }), _jsxs(Wrapper, { children: [_jsx(BarSection, { children: _jsx(ListCards, { type: 'bar' }) }), _jsx(TablesSection, { children: _jsx(ListCards, { type: 'tables' }) })] })] }));
};
export default RestaurantFoyer;
