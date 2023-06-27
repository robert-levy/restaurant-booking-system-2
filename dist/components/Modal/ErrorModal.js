import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { acknowledgeError } from "../../context/dataActions";
import { useDataDispatch } from "../../context/DataContext";
import { Button } from "@mui/material";
var style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
export default function ErrorModal(_a) {
    var errorMessage = _a.errorMessage;
    var dispatch = useDataDispatch().dispatch;
    var handleClose = function () {
        dispatch(acknowledgeError());
    };
    return (_jsx("div", { children: _jsx(Modal, { open: true, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsxs(Box, { sx: style, children: [_jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: "Error Occured" }), _jsx(Typography, { id: "modal-modal-description", sx: { mt: 2 }, children: errorMessage }), _jsx(Button, { variant: "contained", color: "error", onClick: handleClose, style: { marginTop: 20 }, children: "Okay" })] }) }) }));
}
