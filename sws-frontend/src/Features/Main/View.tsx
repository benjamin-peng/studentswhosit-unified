import styled from "styled-components";
import { FlexColumnCenter } from "../../Components/Container/FlexColumnCenter";
import { FlexRowCenter } from "../../Components/Container/FlexRowCenter";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Bear } from "../../Components/Logos/Bear";
import { Colors } from "../../Config/Colors";

const BlurbHeader = styled.p`
  font-size: 1.4em;
`;

const BlurbBody = styled.p`
  font-family: "Garet";
  font-size: 1.2em;
`;

const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

const ListContainer = styled.div`
  font-family: "Garet";
`;

const CenterContainer = styled(FlexRowCenter)`
  margin-top: 3em;
  width: 80vw;
  column-gap: 4em;

  .logo {
    flex: 1;
    //border: 1px solid black;
  }
  .text {
    flex: 2;
    //border: 1px solid black;
  }
`;

const ButtonContainer = styled(FlexRowCenter)`
  column-gap: 2em;
  height: 100%;
  margin-top: 15vh;
`;

const Button = styled.div`
  padding: 0 1em 0 1em;
  height: 2em;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterH1 = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 3em;
  color: ${Colors.SWS_ORANGE};
`;

const BlurbBodyText =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ";

const View: React.FC = () => {
  return (
    <>
      <Navbar currentPage={"main"} />
      <FlexColumnCenter>
        <CenterContainer>
          <BlurbContainer className="text">
            <BlurbHeader>
              Connecting Duke Professors With Student Babysitters
            </BlurbHeader>
            <BlurbBody>{BlurbBodyText}</BlurbBody>
            <ListContainer>
              <BlurbBody>Need a for a sitter:</BlurbBody>
              <ul>
                <li>Before or after school?</li>
                <li>On a date night?</li>
                <li>Last minute?</li>
              </ul>
              <BlurbBody>We got you covered!</BlurbBody>
            </ListContainer>
          </BlurbContainer>
          <BlurbContainer className="logo">
            <Bear></Bear>
            <CenterH1>SWS</CenterH1>
          </BlurbContainer>
        </CenterContainer>
        <ButtonContainer>
          <Button>Find a babysitter</Button>
          <Button>Become a babysitter</Button>
        </ButtonContainer>
      </FlexColumnCenter>
    </>
  );
};

export { View };
