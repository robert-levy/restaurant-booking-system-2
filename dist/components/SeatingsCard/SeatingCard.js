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
const StyledCard = styled(Card) `
  max-height: 100px;
  min-width: 63px;
  max-width: 80px;
  background-color: ${(props) => props.background};
  border-radius: 15%;
  padding: 5px;
  ${(props) => props.type === "bar" &&
    css `
    max-width: 63px;
      }
    `}
`;
const CardTypography = styled(Typography) `
  @media (max-width: 750px) {
    font-size: 0.6em;
  }
`;
const SpaceNumber = styled(Typography) `
  position: relative;
  color: white;
  font-size: 0.7em;
  top: 8px;

  ${(props) => props.type === "tables" &&
    css `
      left: 29px;
    `}

  ${(props) => props.type === "bar" &&
    css `
      left: 23px;
      z-index: 1;
    `}
`;
const TableIcon = () => (_jsx(TableBarIcon, { style: {
        fontSize: "3.2em",
        justifyContent: "center",
        marginRight: "5px",
    } }));
const BarSeatIcon = () => (_jsx("div", { style: { position: "relative", marginTop: 8 }, children: _jsx(BarStoolIcon, {}) }));
const SeatingCard = ({ availability, spaceNumber, seats, type, }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { dispatch } = useDataDispatch();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMakeAvailable = (type) => {
        if (availability !== Availability.Available) {
            dispatch(changeSeatingStatus(spaceNumber, type, Availability.Available));
        }
        handleClose();
    };
    const handleMakeOutOfOrder = () => {
        if (availability !== Availability.OutOfOrder) {
            dispatch(changeSeatingStatus(spaceNumber, type, Availability.OutOfOrder));
        }
        handleClose();
    };
    const handleMakeReserved = () => {
        if (availability !== Availability.Reserved) {
            dispatch(changeSeatingStatus(spaceNumber, type, Availability.Reserved));
        }
        handleClose();
    };
    const availabilityColors = {
        available: "#a6ffa8",
        unavailable: "#ffa7a7",
        reserved: "green",
        "out-of-order": "gray",
    };
    const backgroundColor = availabilityColors[availability] || "gray";
    return (_jsx(StyledCard, { background: backgroundColor, type: type, children: _jsxs(Grid, { container: true, spacing: 0, children: [_jsxs(Grid, { item: true, xs: 9, style: { display: "flex", justifyContent: "center" }, children: [_jsx(SpaceNumber, { type: type, children: spaceNumber }), type === "tables" ? _jsx(TableIcon, {}) : _jsx(BarSeatIcon, {})] }), _jsxs(Grid, { item: true, xs: 3, children: [_jsx(IconButton, { style: { fontSize: "3.2em", marginLeft: -8 }, onClick: handleClick, children: _jsx(MoreVertIcon, {}) }), _jsxs(Menu, { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                                "aria-labelledby": "basic-button",
                            }, children: [_jsx(MenuItem, { onClick: () => handleMakeAvailable(type), children: "Make Available" }), _jsx(MenuItem, { onClick: handleMakeOutOfOrder, children: "Make Out of Order" }), _jsx(MenuItem, { onClick: handleMakeReserved, children: "Make Reserved" })] })] }), _jsx(Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "center" }, children: type === "tables" && (_jsxs(CardTypography, { fontSize: ".8em", children: [seats, " seats"] })) }), _jsx(Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "center" }, children: _jsx(CardTypography, { align: "center", fontSize: ".8em", children: availability }) })] }) }));
};
export default SeatingCard;
