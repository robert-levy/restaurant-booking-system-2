import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { useDataDispatch } from "../context/DataContext";
var RestaurantContainer = function (_a) {
    var children = _a.children;
    var state = useDataDispatch().state;
    return (_jsxs(_Fragment, { children: [children, state.errorMessage && _jsx(ErrorModal, { errorMessage: state.errorMessage })] }));
};
export default RestaurantContainer;
