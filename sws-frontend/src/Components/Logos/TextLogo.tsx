import Logo from "../../Assets/sws-textlogo.png";
import SVGLogo from "../../Assets/sws-textlogo.svg";
import { ReactComponent as SmallLogo } from "../../Assets/sws-textlogo-small.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
`;

const StyledSmallLogo = styled(SmallLogo)`
  height: 80%;
  width: 10%;
`;

const TextLogo = () => {
  return <StyledLogo src={SVGLogo} />;
};

const SmallTextLogo = () => {
  return <StyledSmallLogo></StyledSmallLogo>;
};

export { TextLogo, SmallTextLogo };
