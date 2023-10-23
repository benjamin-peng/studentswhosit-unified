import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexRowCenter: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { FlexRowCenter };
