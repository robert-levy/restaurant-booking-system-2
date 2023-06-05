import { Paper, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ListBarSeats from "../ListBarSeats/ListBarSeats";
import ListTables from "../ListTables/ListTables";

interface IRestaurantFoyer {
  branchName: string;
}

const StyledPaper = styled(Paper)`
  height: 25vh;
  background: #eee;
  padding: 5% 5%;
  gap: 5%;
  margin-top: 2px;
`;

const Wrapper = styled.div``;
const BarSection = styled.div``;

const TablesSection = styled.div``;

const RestaurantFoyer: React.FC<IRestaurantFoyer> = ({ branchName }) => {
  return (
    <StyledPaper>
      <Typography variant="h5">{branchName} Foyer</Typography>
      <Divider style={{ margin: "2% 5%" }} />
      <Wrapper>
        <BarSection>
          <ListBarSeats />
        </BarSection>
        <TablesSection>
          <ListTables />
        </TablesSection>
      </Wrapper>
    </StyledPaper>
  );
};

export default RestaurantFoyer;
