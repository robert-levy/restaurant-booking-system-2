import React, { useState } from "react";
import {
  Paper,
  Typography,
  Divider,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
import { useDataDispatch } from "../../context/DataContext";
import { makeBooking } from "../../context/dataActions";

const StyledPaper = styled(Paper)`
  height: 25vh;
  background: #eee;
  padding: 5% 5%;
  gap: 5%;
`;

const FormWrapper = styled.div`
  display: flex;
`;

const FormSection = () => {
  const { dispatch } = useDataDispatch();
  const [totalPersons, setTotalPersons] = useState(2);
  const [personsWithDisability, setPersonsWithDisability] = useState(0);
  const handleSubmit = () => {
    dispatch(makeBooking(totalPersons, personsWithDisability));
  };

  return (
    <StyledPaper elevation={1}>
      <Typography variant="h5">New Booking</Typography>
      <Divider style={{ margin: "2% 5%" }} />
      <FormWrapper /*onSubmit={handleSubmit}*/>
        <TextField
          id=""
          select
          required
          label="Total Persons"
          fullWidth
          color="secondary"
          value={totalPersons}
          onChange={(e) => setTotalPersons(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id=""
          select
          label="Persons with a Disability"
          fullWidth
          defaultValue={0}
          color="secondary"
          value={personsWithDisability}
          onChange={(e) => setPersonsWithDisability(Number(e.target.value))}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <IconButton aria-label="CheckCircleIcon" onClick={handleSubmit}>
          <CheckCircleIcon color="secondary" fontSize="large" />
        </IconButton>
      </FormWrapper>
    </StyledPaper>
  );
};

export default FormSection;
