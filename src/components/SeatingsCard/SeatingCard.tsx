import React from "react";
import {
  Card,
  Grid,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { css } from "@emotion/react";
import TableBarIcon from "@mui/icons-material/TableBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ReactComponent as BarStoolIcon } from "../../assets/bar-chair.svg";
import styled from "@emotion/styled";
import { useDataDispatch } from "../../context/DataContext";
import { changeSeatingStatus } from "../../context/dataActions";
import { ICardType, Availability } from "../../interfaces/interfaces";

interface ICardInterface {
  spaceNumber: number;
  seats?: number;
  availability: Availability;
  type: ICardType;
}

interface StyledCardProps {
  background: string;
}

//
const StyledCard = styled(Card)<StyledCardProps>`
  max-height: 100px;
  min-width: 63px;
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

interface TableNumberProps {
  type: "tables" | "bar";
}

const SpaceNumber = styled(Typography)<TableNumberProps>`
  position: relative;
  color: white;
  font-size: 0.7em;
  top: 8px;

  ${(props) =>
    props.type === "tables" &&
    css`
      left: 29px;
    `}

  ${(props) =>
    props.type === "bar" &&
    css`
      left: 23px;
      z-index: 1;
    `}
`;

const TableIcon = () => (
  <TableBarIcon
    style={{
      fontSize: "3.2em",
      justifyContent: "center",
      marginRight: "5px",
    }}
  />
);

const BarSeatIcon = () => (
  <div style={{ position: "relative", marginTop: 8 }}>
    <BarStoolIcon />
  </div>
);

const SeatingCard = ({
  availability,
  spaceNumber,
  seats,
  type,
}: ICardInterface) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { dispatch } = useDataDispatch();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMakeAvailable = (type: ICardType) => {
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

  const availabilityColors: Record<Availability, string> = {
    available: "#a6ffa8",
    unavailable: "#ffa7a7",
    reserved: "green",
    "out-of-order": "gray",
  };
  const backgroundColor = availabilityColors[availability] || "gray";

  return (
    <StyledCard background={backgroundColor}>
      <Grid container spacing={0}>
        <Grid item xs={9} style={{ display: "flex", justifyContent: "center" }}>
          <SpaceNumber type={type}>{spaceNumber}</SpaceNumber>
          {type === "tables" ? <TableIcon /> : <BarSeatIcon />}
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
            <MenuItem onClick={() => handleMakeAvailable(type)}>
              Make Available
            </MenuItem>
            <MenuItem onClick={handleMakeOutOfOrder}>
              Make Out of Order
            </MenuItem>
            <MenuItem onClick={handleMakeReserved}>Make Reserved</MenuItem>
          </Menu>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {type === "tables" && (
            <CardTypography fontSize=".8em">{seats} seats</CardTypography>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CardTypography align="center" fontSize=".8em">
            {availability}
          </CardTypography>
        </Grid>
      </Grid>
    </StyledCard>
  );
};
export default SeatingCard;
