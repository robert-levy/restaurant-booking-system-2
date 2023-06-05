import React from "react";
import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import TableBarIcon from "@mui/icons-material/TableBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "@emotion/styled";
import { IRestaurantTable } from "../../interfaces/interfaces";
import { useDataDispatch } from "../../context/DataContext";
import { makeTableAvailable } from "../../context/dataActions";

interface StyledCardProps {
  background: string;
}

//
const StyledCard = styled(Card)<StyledCardProps>`
  height: auto;
  width: 15%;
  min-width: 43px;
  max-width: 80px;
  background-color: ${(props) => props.background};
  border-radius: 15%;
  padding: 5px;
`;

const CardTypography = styled(Typography)`
  @media (max-width: 750px) {
    font-size: 0.6em;
  }
`;

const TableNumber = styled(Typography)`
  position: relative;
  color: white;
  top: 8px;
  left: 32px;
  font-size: 0.7em;
`;

const TableCard = ({ availability, tableNumber, seats }: IRestaurantTable) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileAnchorEl, setMobileAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const { dispatch } = useDataDispatch();
  const open = Boolean(anchorEl);
  const mobileOpen = Boolean(mobileAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileCLick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMakeAvailable = () => {
    dispatch(makeTableAvailable(tableNumber));
    handleClose(); // will have to do this for mobile too
  };

  const backgroundColor =
    availability === "available"
      ? "green"
      : availability === "unavailable"
      ? "red"
      : "gray";

  return (
    <StyledCard background={backgroundColor}>
      {isSmallScreen ? (
        <>
          <IconButton
            style={{ marginLeft: 13, padding: 0, height: 1 }}
            onClick={handleMobileCLick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={mobileAnchorEl}
            open={mobileOpen}
            onClose={handleMobileClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleMakeAvailable}>Make Available</MenuItem>
            <MenuItem onClick={handleMobileClose}>Make Out of Order</MenuItem>
            <MenuItem onClick={handleMobileClose}>Make Reserved</MenuItem>
          </Menu>
          <Grid container spacing={0}>
            <Grid
              item
              xs={11}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <TableNumber style={{ left: 30 }}>{tableNumber}</TableNumber>
              <TableBarIcon
                style={{
                  fontSize: "3.2em",
                  justifyContent: "center",
                  marginRight: "5px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CardTypography fontSize=".8em">{seats}</CardTypography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CardTypography align="center" fontSize=".8em">
                Out of Order
              </CardTypography>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container spacing={0}>
          <Grid
            item
            xs={9}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TableNumber>{tableNumber}</TableNumber>
            <TableBarIcon
              style={{
                fontSize: "3.2em",
                justifyContent: "center",
                marginRight: "5px",
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <IconButton
              style={{ fontSize: "3.2em", marginLeft: -8 }}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleMakeAvailable}>Make Available</MenuItem>
              <MenuItem onClick={handleClose}>Make Out of Order</MenuItem>
              <MenuItem onClick={handleClose}>Make Reserved</MenuItem>
            </Menu>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CardTypography fontSize=".8em">{seats} seats</CardTypography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CardTypography align="center" fontSize=".8em">
              Out of Order
            </CardTypography>
          </Grid>
        </Grid>
      )}
    </StyledCard>
  );
};
export default TableCard;
