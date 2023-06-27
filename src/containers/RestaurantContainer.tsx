import React from "react";
import Modal from "../components/Modal/Modal";
import { useDataDispatch } from "../context/DataContext";
import { ModalType } from "../interfaces/interfaces";

const RestaurantContainer = ({ children }: { children: React.ReactNode }) => {
  const { state } = useDataDispatch();

  return (
    <>
      {children}
      {state.errorMessage && (
        <Modal message={state.errorMessage} modalType={ModalType.Error} />
      )}
      {state.successMessage && (
        <Modal message={state.successMessage} modalType={ModalType.Success} />
      )}
    </>
  );
};

export default RestaurantContainer;
