import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
const StyledToolbar = styled(Toolbar) `
  display: flex;
  gap: 1.2em;
  height:15vh;
`;
const StyledTypography = styled(Typography) `
@media (max-width: 600px) {
  font-size: 1.5em;
}
`;
const Header = () => {
    return (_jsx(AppBar, { position: "static", color: "secondary", children: _jsxs(StyledToolbar, { children: [_jsx(RestaurantIcon, { fontSize: 'large' }), _jsx(StyledTypography, { variant: "h4", sx: { flexGrow: 1 }, children: "Restaurant Booking System" })] }) }));
};
export default Header;
