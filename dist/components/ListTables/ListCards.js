var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import SeatingCard from "../SeatingsCard/SeatingCard";
import { useDataDispatch } from "../../context/DataContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
var TableCardWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n  @media (max-width: 750px) {\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n  @media (max-width: 750px) {\n    justify-content: center;\n  }\n"])));
var ListCards = function (_a) {
    var type = _a.type;
    var tables = useDataDispatch().state.tables;
    return (_jsxs(_Fragment, { children: [_jsx(Typography, __assign({ variant: "h6" }, { children: "Active Tables" }), void 0), _jsx(TableCardWrapper, { children: tables.map(function (table, index) { return (_jsx(SeatingCard, { type: type, availability: table.availability, seats: table.seats, spaceNumber: table.tableNumber }, index)); }) }, void 0)] }, void 0));
};
export default ListCards;
var templateObject_1;
