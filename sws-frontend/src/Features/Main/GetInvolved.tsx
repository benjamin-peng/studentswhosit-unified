import styled from "styled-components";
import { FlexColumnCenter } from "../../Components/Container/FlexColumnCenter";
import { FlexRowCenter } from "../../Components/Container/FlexRowCenter";
import { Navbar } from "../../Components/Navbar/Navbar";

const Header = styled.h1`
  font-size: 4em;
`;

const SubHeader = styled.h2`
  font-size: 2em;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background-color: #dceefb;
  border-radius: 10px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fdf0d9;
  border-radius: 20px;
`;

const View: React.FC = () => {
  return (
    <>
      <Navbar currentPage={"getinvolved"} />

      <FlexColumnCenter>
        <FlexRowCenter>
          <Header>Get involved in a variety of ways!</Header>
        </FlexRowCenter>
        <FlexColumnCenter>
            <FlexColumnCenter>
                <FlexRowCenter>
                <SubHeader>Become a sitter!</SubHeader>
                </FlexRowCenter>
                <Description>
                We understand the demands of being a student. 
                Students Who Sit offers a flexible schedule that allows you to balance your academic commitments while earning income, 
                choosing your own rate/hour. If you're interested in joining the team, head over to the sign up page!{" "}
                </Description>
                </FlexColumnCenter>
                <FlexRowCenter>
                <SubHeader>Become a campus manager!</SubHeader>
                </FlexRowCenter>
                <FlexColumnCenter>
                <Description>
                fill this in with description
                </Description>
                </FlexColumnCenter>
                <FlexRowCenter>
                <SubHeader>Know Any Interested Faculty?</SubHeader>
                </FlexRowCenter>
                <FlexColumnCenter>
                <Description>
                fill this in with description
                </Description>
                </FlexColumnCenter>
                <FlexRowCenter>
                <SubHeader>Questions? Comments? Concerns?</SubHeader>
                </FlexRowCenter>
                <FlexColumnCenter>
                <Description>
                Please reach out to our founder, Sydelle Bernstein, directly at sydelle.bernstein@duke.edu
                </Description>
            </FlexColumnCenter>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </>
  );
};

export { View };
