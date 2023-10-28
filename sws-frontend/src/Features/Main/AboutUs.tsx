import styled from "styled-components";
import { FlexColumnCenter } from "../../Components/Container/FlexColumnCenter";
import { FlexRowCenter } from "../../Components/Container/FlexRowCenter";
import { Navbar } from "../../Components/Navbar/Navbar";

//Headcard Component I made
import { Headcard } from "../../Components/Headcard";

const Header = styled.h1`
  font-size: 5em;
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
      <Navbar currentPage={"about"} />

      <FlexColumnCenter>
        <FlexRowCenter>
          <Header>Our Mission</Header>
        </FlexRowCenter>
        <FlexColumnCenter>
          <Description>
            We aim to to offer reliable, affordable, and consistent child care
            for the children of Duke's faculty and staff, all while empowering
            students by providing them with a stable income in a safe,
            enriching, low-pressure environment.{" "}
          </Description>
        </FlexColumnCenter>
        <FlexRowCenter></FlexRowCenter>
        <FlexRowCenter>
          <Header>The SWS Team</Header>
        </FlexRowCenter>
        <FlexRowCenter>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              description="This is a description of the 1st person"
            />
          </ImageContainer>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              description="This is a description of the 2nd person"
            />
          </ImageContainer>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              description="This is a description of the 3rd person"
            />
          </ImageContainer>
        </FlexRowCenter>
        <FlexRowCenter>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              description="This is a description of the 4th person"
            />
          </ImageContainer>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              description="This is a description of the 5th person"
            />
          </ImageContainer>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              description="This is a description of the 6th person"
            />
          </ImageContainer>
        </FlexRowCenter>
      </FlexColumnCenter>
    </>
  );
};

export { View };
