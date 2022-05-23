import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const Layout = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrap>{children}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 5vw 0;
`;

const Title = styled.h1`
  text-align: center;
  ${mobile({ fontSize: 24 })}
`;

const Wrap = styled.div`
  padding: 20px 0;
`;

export default Layout;
