import React from 'react'
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { useDataDispatch } from "../context/DataContext";

const RestaurantContainer = ({ children }: {children: React.ReactNode}) => {
  const { state } = useDataDispatch();

  return (
    <>
      {children}
      {state.errorMessage && <ErrorModal errorMessage={state.errorMessage}/>}
    </>
  );
};

export default RestaurantContainer;
