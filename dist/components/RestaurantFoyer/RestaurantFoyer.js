var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Paper, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ListCards from "../ListCards/ListCards";
var StyledPaper = styled(Paper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #eee;\n  padding: 5% 5%;\n  gap: 5%;\n  margin-top: 2px;\n"], ["\n  background: #eee;\n  padding: 5% 5%;\n  gap: 5%;\n  margin-top: 2px;\n"])));
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  \n"], ["\n  \n"])));
var BarSection = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var TablesSection = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var RestaurantFoyer = function (_a) {
    var branchName = _a.branchName;
    var tablesType = 'tables';
    return (_jsxs(StyledPaper, { children: [_jsxs(Typography, { variant: "h5", children: [branchName, " Foyer"] }), _jsx(Divider, { style: { margin: "2% 5%" } }), _jsxs(Wrapper, { children: [_jsx(BarSection, {}), _jsx(TablesSection, { children: _jsx(ListCards, { type: tablesType }) })] })] }));
};
export default RestaurantFoyer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
