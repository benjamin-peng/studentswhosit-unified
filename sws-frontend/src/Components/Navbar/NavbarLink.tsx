import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Colors } from "../../Config/Colors";

interface Props {
  current: boolean;
  to: string;
  children?: React.ReactNode;
}

const StyledLink = styled(animated(Link))<{ $current: boolean }>`
  font-size: 1.3em;
  color: ${(props) => (props.$current ? Colors.SWS_ORANGE : "black")};
  text-decoration: none;
  display: inline-block;
`;

const NavbarLink: React.FC<Props> = ({ current, to, children }) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  const style = useSpring({
    from: { color: "black", fontSize: "1.3em" },
    to: {
      color: hover ? Colors.SWS_ORANGE : current ? Colors.SWS_ORANGE : "black",
    },
    config: { duration: 120, mass: 5, friction: 90, tension: 120 },
  });

  return (
    <StyledLink
      $current={current}
      to={to}
      style={style}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </StyledLink>
  );
};

export { NavbarLink };
