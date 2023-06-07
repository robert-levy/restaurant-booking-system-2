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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Card, Grid, Typography, IconButton, Menu, MenuItem, } from "@mui/material";
import { css } from "@emotion/react";
import TableBarIcon from "@mui/icons-material/TableBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ReactComponent as BarStoolIcon } from "../../assets/bar-chair.svg";
import styled from "@emotion/styled";
import { useDataDispatch } from "../../context/DataContext";
import { makeTableAvailable } from "../../context/dataActions";
//
var StyledCard = styled(Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: 100px;\n  min-width: 63px;\n  max-width: 80px;\n  background-color: ", ";\n  border-radius: 15%;\n  padding: 5px;\n"], ["\n  max-height: 100px;\n  min-width: 63px;\n  max-width: 80px;\n  background-color: ", ";\n  border-radius: 15%;\n  padding: 5px;\n"])), function (props) { return props.background; });
var CardTypography = styled(Typography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (max-width: 750px) {\n    font-size: 0.6em;\n  }\n"], ["\n  @media (max-width: 750px) {\n    font-size: 0.6em;\n  }\n"])));
var TableNumber = styled(Typography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  color: white;\n  font-size: 0.7em;\n  top: 8px;\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  color: white;\n  font-size: 0.7em;\n  top: 8px;\n\n  ", "\n\n  ", "\n"])), function (props) {
    return props.type === "tables" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      left: 29px;\n    "], ["\n      left: 29px;\n    "])));
}, function (props) {
    return props.type === "bar" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      left: 27px;\n      z-index: 1;\n    "], ["\n      left: 27px;\n      z-index: 1;\n    "])));
});
var TableIcon = function () { return (_jsx(TableBarIcon, { style: {
        fontSize: "3.2em",
        justifyContent: "center",
        marginRight: "5px",
    } }, void 0)); };
var BarSeatIcon = function () { return (_jsx("div", __assign({ style: { position: "relative", marginTop: 8 } }, { children: _jsx(BarStoolIcon, {}, void 0) }), void 0)); };
var SeatingCard = function (_a) {
    var availability = _a.availability, tableNumber = _a.tableNumber, seats = _a.seats, type = _a.type;
    var _b = React.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var dispatch = useDataDispatch().dispatch;
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleMakeAvailable = function () {
        dispatch(makeTableAvailable(tableNumber));
        handleClose();
    };
    var backgroundColor = availability === "available"
        ? "#a6ffa8"
        : availability === "unavailable"
            ? "#ffa7a7"
            : "gray";
    return (_jsx(StyledCard, __assign({ background: backgroundColor }, { children: _jsxs(Grid, __assign({ container: true, spacing: 0 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 9, style: { display: "flex", justifyContent: "center" } }, { children: [_jsx(TableNumber, __assign({ type: type }, { children: tableNumber }), void 0), type === "tables" ? _jsx(TableIcon, {}, void 0) : _jsx(BarSeatIcon, {}, void 0)] }), void 0), _jsxs(Grid, __assign({ item: true, xs: 3 }, { children: [_jsx(IconButton, __assign({ style: { fontSize: "3.2em", marginLeft: -8 }, onClick: handleClick }, { children: _jsx(MoreVertIcon, {}, void 0) }), void 0), _jsxs(Menu, __assign({ id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                                "aria-labelledby": "basic-button",
                            } }, { children: [_jsx(MenuItem, __assign({ onClick: handleMakeAvailable }, { children: "Make Available" }), void 0), _jsx(MenuItem, __assign({ onClick: handleClose }, { children: "Make Out of Order" }), void 0), _jsx(MenuItem, __assign({ onClick: handleClose }, { children: "Make Reserved" }), void 0)] }), void 0)] }), void 0), _jsx(Grid, __assign({ item: true, xs: 12, style: { display: "flex", justifyContent: "center" } }, { children: type === "tables" && (_jsxs(CardTypography, __assign({ fontSize: ".8em" }, { children: [seats, " seats"] }), void 0)) }), void 0), _jsx(Grid, __assign({ item: true, xs: 12, style: { display: "flex", justifyContent: "center" } }, { children: _jsx(CardTypography, __assign({ align: "center", fontSize: ".8em" }, { children: availability }), void 0) }), void 0)] }), void 0) }), void 0));
};
export default SeatingCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
