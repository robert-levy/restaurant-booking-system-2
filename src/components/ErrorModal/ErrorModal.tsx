import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { acknowledgeError } from "../../context/dataActions";
import { useDataDispatch } from "../../context/DataContext";
import { Button } from "@mui/material";

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
  errorMessage: string;
}

export default function ErrorModal({ errorMessage }: ErrorModalInterface) {
  const { dispatch } = useDataDispatch();

  const handleClose = () => {
    dispatch(acknowledgeError());
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error Occured
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
          <Button variant="contained" color="error" onClick={handleClose} style={{marginTop:20}}>
            Okay
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
