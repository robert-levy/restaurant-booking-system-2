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
  height: auto;
  background: #eee;
  padding: 5% 5%;
  gap: 5%;
`;

const FormWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const StyledTextField = styled(TextField)`
  max-width: 300px;
`;

const FormSection = () => {
  const { dispatch } = useDataDispatch();
  const [totalPersons, setTotalPersons] = useState(2);
  const [personsWithDisability, setPersonsWithDisability] = useState(0);
  const [personsWithDisabilityInputs, setPersonsWithDisabilityInputs] =
    useState([0, 1, 2]);

  const handleSubmit = () => {
    dispatch(makeBooking(totalPersons, personsWithDisability));
  };

  const handleTotalPersonsOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const totalPersons = +(e.target.value)
    setTotalPersons(totalPersons);
    setPersonsWithDisabilityInputs( [...Array(totalPersons + 1).keys()]);
  };

  return (
    <StyledPaper elevation={1}>
      <Typography variant="h5">New Booking</Typography>
      <Divider style={{ margin: "2% 5%" }} />
      <FormWrapper>
        <StyledTextField
          id=""
          select
          required
          label="Total Persons"
          fullWidth
          color="secondary"
          value={totalPersons}
          onChange={(e) => handleTotalPersonsOnChange(e)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </StyledTextField>
        <StyledTextField
          id=""
          select
          label="Persons with a Disability"
          fullWidth
          defaultValue={0}
          color="secondary"
          value={personsWithDisability}
          onChange={(e) => setPersonsWithDisability(Number(e.target.value))}
        >
          {personsWithDisabilityInputs.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </StyledTextField>

        <IconButton aria-label="CheckCircleIcon" onClick={handleSubmit}>
          <CheckCircleIcon color="secondary" fontSize="large" />
        </IconButton>
      </FormWrapper>
    </StyledPaper>
  );
};

export default FormSection;
