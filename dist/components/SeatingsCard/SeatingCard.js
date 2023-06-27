var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import { changeSeatingStatus } from "../../context/dataActions";
import { Availability } from "../../interfaces/interfaces";
//
var StyledCard = styled(Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: 100px;\n  min-width: 63px;\n  max-width: 80px;\n  background-color: ", ";\n  border-radius: 15%;\n  padding: 5px;\n"], ["\n  max-height: 100px;\n  min-width: 63px;\n  max-width: 80px;\n  background-color: ", ";\n  border-radius: 15%;\n  padding: 5px;\n"])), function (props) { return props.background; });
var CardTypography = styled(Typography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (max-width: 750px) {\n    font-size: 0.6em;\n  }\n"], ["\n  @media (max-width: 750px) {\n    font-size: 0.6em;\n  }\n"])));
var SpaceNumber = styled(Typography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  color: white;\n  font-size: 0.7em;\n  top: 8px;\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  color: white;\n  font-size: 0.7em;\n  top: 8px;\n\n  ", "\n\n  ", "\n"])), function (props) {
    return props.type === "tables" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      left: 29px;\n    "], ["\n      left: 29px;\n    "])));
}, function (props) {
    return props.type === "bar" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      left: 27px;\n      z-index: 1;\n    "], ["\n      left: 27px;\n      z-index: 1;\n    "])));
});
var TableIcon = function () { return (_jsx(TableBarIcon, { style: {
        fontSize: "3.2em",
        justifyContent: "center",
        marginRight: "5px",
    } })); };
var BarSeatIcon = function () { return (_jsx("div", { style: { position: "relative", marginTop: 8 }, children: _jsx(BarStoolIcon, {}) })); };
var SeatingCard = function (_a) {
    var availability = _a.availability, spaceNumber = _a.spaceNumber, seats = _a.seats, type = _a.type;
    var _b = React.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var dispatch = useDataDispatch().dispatch;
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleMakeAvailable = function (type) {
        if (availability !== Availability.Available) {
            dispatch(changeSeatingStatus(spaceNumber, type, Availability.Available));
        }
        handleClose();
    };
    var handleMakeOutOfOrder = function () {
        if (availability !== Availability.OutOfOrder) {
            dispatch(changeSeatingStatus(spaceNumber, type, Availability.OutOfOrder));
        }
        handleClose();
    };
    var handleMakeReserved = function () {
        if (availability !== Availability.Reserved) {
            dispatch(changeSeatingStatus(spaceNumber, type, Availability.Reserved));
        }
        handleClose();
    };
    var availabilityColors = {
        available: "#a6ffa8",
        unavailable: "#ffa7a7",
        reserved: "green",
        "out-of-order": "gray",
    };
    var backgroundColor = availabilityColors[availability] || "gray";
    return (_jsx(StyledCard, { background: backgroundColor, children: _jsxs(Grid, { container: true, spacing: 0, children: [_jsxs(Grid, { item: true, xs: 9, style: { display: "flex", justifyContent: "center" }, children: [_jsx(SpaceNumber, { type: type, children: spaceNumber }), type === "tables" ? _jsx(TableIcon, {}) : _jsx(BarSeatIcon, {})] }), _jsxs(Grid, { item: true, xs: 3, children: [_jsx(IconButton, { style: { fontSize: "3.2em", marginLeft: -8 }, onClick: handleClick, children: _jsx(MoreVertIcon, {}) }), _jsxs(Menu, { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                                "aria-labelledby": "basic-button",
                            }, children: [_jsx(MenuItem, { onClick: function () { return handleMakeAvailable(type); }, children: "Make Available" }), _jsx(MenuItem, { onClick: handleMakeOutOfOrder, children: "Make Out of Order" }), _jsx(MenuItem, { onClick: handleMakeReserved, children: "Make Reserved" })] })] }), _jsx(Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "center" }, children: type === "tables" && (_jsxs(CardTypography, { fontSize: ".8em", children: [seats, " seats"] })) }), _jsx(Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "center" }, children: _jsx(CardTypography, { align: "center", fontSize: ".8em", children: availability }) })] }) }));
};
export default SeatingCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
