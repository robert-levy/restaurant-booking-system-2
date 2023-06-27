import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal as MUIModal } from "@mui/material/";
import { acknowledgeError, acknowledgeSuccess } from "../../context/dataActions";
import { useDataDispatch } from "../../context/DataContext";
import { Button } from "@mui/material";
import { ModalType } from "../../interfaces/interfaces";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ErrorModalInterface {
  message: string;
  modalType: ModalType;
}

const enum ButtonColorProp {
  Success = "success",
  Error = "error"
}

export default function Modal({ message, modalType }: ErrorModalInterface) {
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

  return (
    <div>
      <MUIModal
        open={true}
        onClose={handler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message}
          </Typography>
          <Button
            variant="contained"
            color={buttonColorProp}
            onClick={handler}
            style={{ marginTop: 20 }}
          >
            Okay
          </Button>
        </Box>
      </MUIModal>
    </div>
  );
}
