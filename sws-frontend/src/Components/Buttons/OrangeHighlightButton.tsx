import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import { Colors } from "../../Config/Colors";
import { useNavigate } from "react-router-dom";

interface Props {
  link: string;
  children: React.ReactNode;
}

const Button = animated(styled.div`
  padding: 0 1em 0 1em;
  height: 2em;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`);

const OrangeHighlightButton: React.FC<Props> = ({ link, children }) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  const redirect = () => {
    navigate(link);
  };

  const style = useSpring({
    from: {
      color: "black",
      border: "1px solid black",
    },
    to: {
      color: hover ? Colors.SWS_ORANGE : "black",
      border: `1px solid ${hover ? Colors.SWS_ORANGE : "black"}`,
    },
    config: { duration: 120, mass: 5, friction: 90, tension: 120 },
  });

  return (
    <Button
      style={style}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={redirect}
    >
      {children}
    </Button>
  );
};

export { OrangeHighlightButton };
