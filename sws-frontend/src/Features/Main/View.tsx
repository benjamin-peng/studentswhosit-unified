import styled from "styled-components";
import { FlexColumnCenter } from "../../Components/Container/FlexColumnCenter";
import { FlexRowCenter } from "../../Components/Container/FlexRowCenter";
import { Navbar } from "../../Components/Navbar/Navbar";

const Header = styled.h1`
  font-size: 5em;
`;

const View: React.FC = () => {
  return (
    <>
      <Navbar currentPage={"main"} />
      <FlexColumnCenter>
        <FlexColumnCenter>
          <FlexRowCenter>
            <Header>SWS Logo</Header>
          </FlexRowCenter>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </>
  );
};

export { View };
