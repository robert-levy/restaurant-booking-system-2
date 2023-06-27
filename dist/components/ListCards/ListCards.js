var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import SeatingCard from "../SeatingsCard/SeatingCard";
import { useDataDispatch } from "../../context/DataContext";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
var TableCardWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: left;\n  margin-top: 20px;\n  @media (max-width: 750px) {\n    justify-content: center;\n  }\n  ", "\n"], ["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: left;\n  margin-top: 20px;\n  @media (max-width: 750px) {\n    justify-content: center;\n  }\n  ", "\n"])), function (props) {
    return props.type === "bar" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      flex-wrap: nowrap;\n      white-space: nowrap;\n      overflow-x: auto;\n      scrollbar-width: none; /* Firefox */\n      -ms-overflow-style: none; /* Internet Explorer and Edge */\n      padding: 20px 0;\n      // @media (max-width: 750px) {\n      // }\n    "], ["\n      flex-wrap: nowrap;\n      white-space: nowrap;\n      overflow-x: auto;\n      scrollbar-width: none; /* Firefox */\n      -ms-overflow-style: none; /* Internet Explorer and Edge */\n      padding: 20px 0;\n      // @media (max-width: 750px) {\n      // }\n    "])));
});
var ListCards = function (_a) {
    var type = _a.type;
    var _b = useDataDispatch().state, tables = _b.tables, bar = _b.bar;
    var seatingType = type === "tables" ? "Tables" : "Bar Seats";
    return (_jsxs(_Fragment, { children: [_jsxs(Typography, { variant: "h6", children: ["Active ", seatingType] }), _jsx(TableCardWrapper, { type: type, children: type === "tables" ? (_jsx(RenderTables, { tables: tables })) : (_jsx(RenderBarSeats, { bar: bar })) })] }));
};
var RenderTables = function (_a) {
    var tables = _a.tables;
    return (_jsx(_Fragment, { children: tables.map(function (table, index) { return (_jsx(SeatingCard, { type: "tables", availability: table.availability, seats: table.seats, spaceNumber: table.tableNumber }, "table-".concat(table.tableNumber, "__").concat(index))); }) }));
};
var RenderBarSeats = function (_a) {
    var bar = _a.bar;
    return (_jsx(_Fragment, { children: bar.map(function (bar, index) { return (_jsx(SeatingCard, { type: "bar", availability: bar.availability, spaceNumber: bar.barSeatNumber }, "barSeat-".concat(bar.barSeatNumber, "__").concat(index))); }) }));
};
export default ListCards;
var templateObject_1, templateObject_2;
