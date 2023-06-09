import { Paper, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ListCards from "../ListCards/ListCards";

interface IRestaurantFoyer {
  branchName: string;
}

const StyledPaper = styled(Paper)`
  background: #eee;
  padding: 5% 5%;
  gap: 5%;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  
`;
const BarSection = styled.div``;

const TablesSection = styled.div``;

const RestaurantFoyer: React.FC<IRestaurantFoyer> = ({ branchName }) => {
  return (
    <StyledPaper>
      <Typography variant="h5">{branchName} Foyer</Typography>
      <Divider style={{ margin: "2% 5%" }} />
      <Wrapper>
        <BarSection>
          <ListCards type={'bar'} />
        </BarSection>
        <TablesSection>
          <ListCards type={'tables'}/>
        </TablesSection>
      </Wrapper>
    </StyledPaper>
  );
};

export default RestaurantFoyer;
