import React, {useState} from 'react'
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { useDataDispatch } from "../context/DataContext";

interface RestaurantContainerProps {
  children: React.ReactNode;
}

const RestaurantContainer = ({ children }: RestaurantContainerProps) => {
  const { state } = useDataDispatch();

  return (
    <>
      {children}
      {state.errorMessage && <ErrorModal errorMessage={state.errorMessage}/>}
    </>
  );
};

export default RestaurantContainer;
