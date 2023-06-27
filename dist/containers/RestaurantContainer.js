import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Modal from "../components/Modal/Modal";
import { useDataDispatch } from "../context/DataContext";
import { ModalType } from "../interfaces/interfaces";
var RestaurantContainer = function (_a) {
    var children = _a.children;
    var state = useDataDispatch().state;
    return (_jsxs(_Fragment, { children: [children, state.errorMessage && (_jsx(Modal, { message: state.errorMessage, modalType: ModalType.Error })), state.successMessage && (_jsx(Modal, { message: state.successMessage, modalType: ModalType.Success }))] }));
};
export default RestaurantContainer;
