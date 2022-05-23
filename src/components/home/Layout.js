import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const Layout = ({ title, background, children }) => {
  return (
    <Container background={background}>
      <Title>{title}</Title>
      <Wrap>{children}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 100px;
  background-color: ${(props) => props.background || '#f5f5f5'};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
  ${mobile({ fontSize: 24 })}
`;

const Wrap = styled.div`
  padding: 20px 0;
`;

export default Layout;
