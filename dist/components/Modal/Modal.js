import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal as MUIModal } from "@mui/material/";
import { acknowledgeError, acknowledgeSuccess } from "../../context/dataActions";
import { useDataDispatch } from "../../context/DataContext";
import { Button } from "@mui/material";
import { ModalType } from "../../interfaces/interfaces";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '70%',
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
var ButtonColorProp;
(function (ButtonColorProp) {
    ButtonColorProp["Success"] = "success";
    ButtonColorProp["Error"] = "error";
})(ButtonColorProp || (ButtonColorProp = {}));
export default function Modal({ message, modalType }) {
    const { dispatch } = useDataDispatch();
    const modalTypeConfig = {
        [ModalType.Success]: {
            title: "Success",
            buttonColorProp: ButtonColorProp.Success,
            handler: () => dispatch(acknowledgeSuccess())
        },
        [ModalType.Error]: {
            title: "Error Occured",
            buttonColorProp: ButtonColorProp.Error,
            handler: () => dispatch(acknowledgeError()),
        },
    };
    const { title, handler, buttonColorProp } = modalTypeConfig[modalType];
    return (_jsx("div", { children: _jsx(MUIModal, { open: true, onClose: handler, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsxs(Box, { sx: style, children: [_jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: title }), _jsx(Typography, { id: "modal-modal-description", sx: { mt: 2 }, children: message }), _jsx(Button, { variant: "contained", color: buttonColorProp, onClick: handler, style: { marginTop: 20 }, children: "Okay" })] }) }) }));
}
