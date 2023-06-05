import RestaurantIcon from '@mui/icons-material/Restaurant';
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled"

const StyledToolbar = styled(Toolbar)`
  display: flex;
  gap: 1.2em;
  height:15vh;
`;

const Header = () => {
  return (
    <AppBar position="static" color="secondary" >
      <StyledToolbar >
        <RestaurantIcon fontSize='large'/>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Restaurant Booking System
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
