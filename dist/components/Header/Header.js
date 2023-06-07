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
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
var StyledToolbar = styled(Toolbar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  gap: 1.2em;\n  height:15vh;\n"], ["\n  display: flex;\n  gap: 1.2em;\n  height:15vh;\n"])));
var StyledTypography = styled(Typography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n@media (max-width: 600px) {\n  font-size: 1.5em;\n}\n"], ["\n@media (max-width: 600px) {\n  font-size: 1.5em;\n}\n"])));
var Header = function () {
    return (_jsx(AppBar, __assign({ position: "static", color: "secondary" }, { children: _jsxs(StyledToolbar, { children: [_jsx(RestaurantIcon, { fontSize: 'large' }, void 0), _jsx(StyledTypography, __assign({ variant: "h4", sx: { flexGrow: 1 } }, { children: "Restaurant Booking System" }), void 0)] }, void 0) }), void 0));
};
export default Header;
var templateObject_1, templateObject_2;