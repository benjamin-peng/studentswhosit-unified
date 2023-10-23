import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexColumnCenter: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { FlexColumnCenter };
