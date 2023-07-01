import React from "react";
import { Paper, Typography, TextField, IconButton } from "@mui/material/";
import {useDataDispatch} from "../../context/DataContext";
import RestaurantTablesJson from '../../RestaurantTables.json'
import RestaurantBarJson from '../../RestaurantBar.json'
import { createRestaurant } from "../../context/dataActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
import { IBarSeat, IRestaurantTable } from "../../interfaces/interfaces";

interface IWelcomeModal {
  setBranchName: React.Dispatch<React.SetStateAction<string>>;
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  background: #e5e5e5;
  position: absolute;
  height: 300px;
  padding: 25px;
  @media (max-width: 350px) {
    height: 500px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  top: 10%;
  gap:20px;
  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

const WelcomeScreen: React.FC<IWelcomeModal> = ({
  setBranchName,
}) => {
  const {dispatch} = useDataDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setup state
    dispatch(createRestaurant({
      tables: RestaurantTablesJson as IRestaurantTable[],
      bar: RestaurantBarJson as IBarSeat[]
    }))

    const inputElement = e.currentTarget.elements.namedItem(
      "restaurant-name-field"
    ) as HTMLInputElement;
    const inputValue = inputElement.value;
    setBranchName(inputValue)
  };

  return (
    <StyledWrapper>
      <StyledPaper elevation={24}>
        <Typography align="center" variant="h5">
          Welcome to Restuarant Booking System
        </Typography>
        <Typography
          variant="subtitle1"
          marginTop={3}
          marginBottom={2}
          align="center"
        >
          Please enter a restaurant name to begin
        </Typography>
        <FormWrapper onSubmit={handleSubmit}>
          <TextField
            required
            id="restaurant-name-field"
            label="Required"
            defaultValue="Nandos Shoreditch"
          />
          <IconButton aria-label="CheckCircleIcon" type="submit">
            <CheckCircleIcon color="secondary" fontSize="large" />
          </IconButton>
        </FormWrapper>
      </StyledPaper>
    </StyledWrapper>
  );
};

export default WelcomeScreen;
