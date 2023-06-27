var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Paper, Typography, Divider, TextField, MenuItem, IconButton, } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
import { useDataDispatch } from "../../context/DataContext";
import { makeBooking } from "../../context/dataActions";
var StyledPaper = styled(Paper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: auto;\n  background: #eee;\n  padding: 5% 5%;\n  gap: 5%;\n"], ["\n  height: auto;\n  background: #eee;\n  padding: 5% 5%;\n  gap: 5%;\n"])));
var FormWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n  @media (max-width: 1000px) {\n    flex-direction:column;\n    align-items: center;\n    padding: 20px;\n  }\n"], ["\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n  @media (max-width: 1000px) {\n    flex-direction:column;\n    align-items: center;\n    padding: 20px;\n  }\n"])));
var StyledTextField = styled(TextField)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 300px;\n"], ["\n  max-width: 300px;\n"])));
var FormSection = function () {
    var dispatch = useDataDispatch().dispatch;
    var _a = useState(2), totalPersons = _a[0], setTotalPersons = _a[1];
    var _b = useState(0), personsWithDisability = _b[0], setPersonsWithDisability = _b[1];
    var handleSubmit = function () {
        dispatch(makeBooking(totalPersons, personsWithDisability));
    };
    return (_jsxs(StyledPaper, { elevation: 1, children: [_jsx(Typography, { variant: "h5", children: "New Booking" }), _jsx(Divider, { style: { margin: "2% 5%" } }), _jsxs(FormWrapper, { children: [_jsx(StyledTextField, { id: "", select: true, required: true, label: "Total Persons", fullWidth: true, color: "secondary", value: totalPersons, onChange: function (e) { return setTotalPersons(Number(e.target.value)); }, children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (option, index) { return (_jsx(MenuItem, { value: option, children: option }, index)); }) }), _jsx(StyledTextField, { id: "", select: true, label: "Persons with a Disability", fullWidth: true, defaultValue: 0, color: "secondary", value: personsWithDisability, onChange: function (e) { return setPersonsWithDisability(Number(e.target.value)); }, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (option, index) { return (_jsx(MenuItem, { value: option, children: option }, index)); }) }), _jsx(IconButton, { "aria-label": "CheckCircleIcon", onClick: handleSubmit, children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }) })] })] }));
};
export default FormSection;
var templateObject_1, templateObject_2, templateObject_3;
