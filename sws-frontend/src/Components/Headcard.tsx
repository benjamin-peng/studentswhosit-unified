import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
`;

const Description = styled.p`
  text-align: center;
`;

//I need an interface for these props to work
interface HeadcardProps {
  imageSrc: string;
  description: string;
}

const Headcard: React.FC<HeadcardProps> = (props) => {
  const { imageSrc, description } = props;

  return (
    <Card>
      <Image src={imageSrc} alt="Image" />
      <Description>{description}</Description>
    </Card>
  );
};
export { Headcard };
