import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Paper, Typography, Divider, TextField, MenuItem, IconButton, } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
import { useDataDispatch } from "../../context/DataContext";
import { makeBooking } from "../../context/dataActions";
const StyledPaper = styled(Paper) `
  height: auto;
  background: #eee;
  padding: 5% 5%;
  gap: 5%;
`;
const FormWrapper = styled.div `
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
const StyledTextField = styled(TextField) `
  max-width: 300px;
`;
const FormSection = () => {
    const { dispatch } = useDataDispatch();
    const [totalPersons, setTotalPersons] = useState(2);
    const [personsWithDisability, setPersonsWithDisability] = useState(0);
    const [personsWithDisabilityInputs, setPersonsWithDisabilityInputs] = useState([0, 1, 2]);
    const handleSubmit = () => {
        dispatch(makeBooking(totalPersons, personsWithDisability));
    };
    const handleTotalPersonsOnChange = (e) => {
        const totalPersons = +(e.target.value);
        setTotalPersons(totalPersons);
        setPersonsWithDisabilityInputs([...Array(totalPersons + 1).keys()]);
    };
    return (_jsxs(StyledPaper, { elevation: 1, children: [_jsx(Typography, { variant: "h5", children: "New Booking" }), _jsx(Divider, { style: { margin: "2% 5%" } }), _jsxs(FormWrapper, { children: [_jsx(StyledTextField, { id: "", select: true, required: true, label: "Total Persons", fullWidth: true, color: "secondary", value: totalPersons, onChange: (e) => handleTotalPersonsOnChange(e), children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((option, index) => (_jsx(MenuItem, { value: option, children: option }, index))) }), _jsx(StyledTextField, { id: "", select: true, label: "Persons with a Disability", fullWidth: true, defaultValue: 0, color: "secondary", value: personsWithDisability, onChange: (e) => setPersonsWithDisability(Number(e.target.value)), children: personsWithDisabilityInputs.map((option, index) => (_jsx(MenuItem, { value: option, children: option }, index))) }), _jsx(IconButton, { "aria-label": "CheckCircleIcon", onClick: handleSubmit, children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }) })] })] }));
};
export default FormSection;
