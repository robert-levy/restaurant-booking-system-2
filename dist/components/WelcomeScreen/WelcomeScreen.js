import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Typography, TextField, IconButton } from "@mui/material/";
import { useDataDispatch } from "../../context/DataContext";
import RestaurantTablesJson from '../../RestaurantTables.json';
import RestaurantBarJson from '../../RestaurantBar.json';
import { createRestaurant } from "../../context/dataActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
const StyledWrapper = styled.div `
  display: flex;
  justify-content: center;
`;
const StyledPaper = styled(Paper) `
  background: #e5e5e5;
  position: absolute;
  height: 300px;
  padding: 25px;
  @media (max-width: 350px) {
    height: 500px;
  }
`;
const FormWrapper = styled.form `
  display: flex;
  justify-content: center;
  position: relative;
  top: 10%;
  gap:20px;
  @media (max-width: 350px) {
    flex-direction: column;
  }
`;
const WelcomeScreen = ({ setBranchName, }) => {
    const { dispatch } = useDataDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // setup state
        dispatch(createRestaurant({
            tables: RestaurantTablesJson,
            bar: RestaurantBarJson
        }));
        const inputElement = e.currentTarget.elements.namedItem("restaurant-name-field");
        const inputValue = inputElement.value;
        setBranchName(inputValue);
    };
    return (_jsx(StyledWrapper, { children: _jsxs(StyledPaper, { elevation: 24, children: [_jsx(Typography, { align: "center", variant: "h5", children: "Welcome to Restuarant Booking System" }), _jsx(Typography, { variant: "subtitle1", marginTop: 3, marginBottom: 2, align: "center", children: "Please enter a restaurant name to begin" }), _jsxs(FormWrapper, { onSubmit: handleSubmit, children: [_jsx(TextField, { required: true, id: "restaurant-name-field", label: "Required", defaultValue: "Nandos Shoreditch" }), _jsx(IconButton, { "aria-label": "CheckCircleIcon", type: "submit", children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }) })] })] }) }));
};
export default WelcomeScreen;
