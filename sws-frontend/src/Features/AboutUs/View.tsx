import styled from "styled-components";
import { FlexColumnCenter } from "../../Components/Container/FlexColumnCenter";
import { FlexRowCenter } from "../../Components/Container/FlexRowCenter";
import { Navbar } from "../../Components/Navbar/Navbar";

//Headcard Component I made
import { Headcard } from "../../Components/Headcard";

const Header = styled.h1`
  font-size: 5em;
  margin: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background-color: #dceefb;
  border-radius: 10px;
  max-width: 850px;
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

const VerticalSpacing = styled.div`
  margin-top: 20px;
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
        <VerticalSpacing></VerticalSpacing>
        <FlexRowCenter>
          <Header>The SWS Excexutive Team</Header>
        </FlexRowCenter>
        <FlexRowCenter>
          <ImageContainer>
            <Headcard
              imageSrc="profileImages/sydelle.jpeg"
              title="Sydelle Bernstein"
              description="Sydelle Bernstein was born and raised in 
              Connecticut and began Students Who Sit as a Sophomore at Duke University. Coming from a 
              long line of entrepreneurs, she lived, breathed and learned firsthand what it takes to run a successful 
              business. She began her first business selling slime in the halls of her middle school and proceeded to have two 
              successful startups in high school. At Duke, she is passionate about studying Innovation & Entrepreneurship, learning how 
              individuals think and studying malfunctions in the brain through studies in both Neuroscience and Psychology. Outside the classroom, 
              Sydelle works with children in the Durham public schools through the Jumpstart Program, is a member of Dukes’ Women in Business club, 
              and is a Co-Founder of Students Who Sit. Beyond academics, Sydelle plays lacrosse, pick-up basketball and enjoys spending 
              time in nature. As one of six children, Sydelle is the ultimate team member. 
              Being part of athletic, business and educational teams with 
              continual give and take and  collaboration comes most naturally to her! "
            />
          </ImageContainer>
        </FlexRowCenter>
        <FlexRowCenter>
          <ImageContainer>
            <Headcard
              imageSrc="profileImages/raya.jpg"
              title="Raya Caldwell"
              description="Raya Caldwell is a Duke undergraduate pursuing an Interdepartmental Major in Psychology 
              and Public Policy as well as the Innovation and Entrepreneurship Certificate. With an immense passion for 
              working with people, especially children, Raya is involved with research pertaining to the psychology/neuroscience
               aspects of child language acquisition and development via the Wilbourn Infant Lab. She facilitates students in the 
               Durham public preschools via the Jumpstart program and is a Co-Founder and the Human Resources Manager for Students Who Sit! 
               Beyond her academic pursuits, Raya enjoys writing poetry, playing soccer, pickle ball, and seizing every opportunity to 
               travel and explore the outdoors.
              "
            />
          </ImageContainer>
        </FlexRowCenter>
        <Header>Other SWS Members</Header>
        <FlexRowCenter>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              title="Memebr 1"
              description="This is a description of the 1st other member"
            />
          </ImageContainer>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              title="Member 2"
              description="This is a description of the 2nd other Member"
            />
          </ImageContainer>
          <ImageContainer>
            <Headcard
              imageSrc="logo192.png"
              title="Memeber 3"
              description="This is a description of the 3rd other Memeber"
            />
          </ImageContainer>
        </FlexRowCenter>
      </FlexColumnCenter>
    </>
  );
};

export { View };
