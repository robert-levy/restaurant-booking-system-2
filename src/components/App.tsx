import React, { useState } from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./Header/Header";
import FormSection from "./FormSection/FormSection";
import RestaurantContainer from "../containers/RestaurantContainer";
import RestaurantFoyer from "./RestaurantFoyer/RestaurantFoyer";
import styled from "@emotion/styled";
import WelcomeModal from "./WelcomeScreen/WelcomeScreen";

const Wrapper = styled.div`
  background-color: #d1a7ff;
  padding: 10% 15%;
  @media (max-width: 750px) {
    padding: 0;
  }
`;

const App = () => {
  const [branchName, setBranchName] = useState("");
  return (
    <Wrapper>
      <DataProvider>
        {!branchName ? (
          <WelcomeModal setBranchName={setBranchName} />
        ) : (
          <>
            <Header />

            <RestaurantContainer>
              <FormSection />
              <RestaurantFoyer branchName={branchName} />
            </RestaurantContainer>
          </>
        )}
      </DataProvider>
    </Wrapper>
  );
};

export default App;
