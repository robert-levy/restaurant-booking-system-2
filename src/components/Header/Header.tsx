import RestaurantIcon from '@mui/icons-material/Restaurant';
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled"

const StyledToolbar = styled(Toolbar)`
  display: flex;
  gap: 1.2em;
  height:15vh;
`;

const StyledTypography = styled(Typography)`
@media (max-width: 600px) {
  font-size: 1.5em;
}
`

const Header = () => {
  return (
    <AppBar position="static" color="secondary" >
      <StyledToolbar >
        <RestaurantIcon fontSize='large'/>
        <StyledTypography variant="h4"  sx={{ flexGrow: 1 }}>
          Restaurant Booking System
        </StyledTypography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
