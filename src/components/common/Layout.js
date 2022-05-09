import styled from 'styled-components';
import { tablet } from '../../utils/responsive';
import Footer from '../home/Footer';
import Header from '../home/Header';

const Layout = ({ title, children }) => {
  return (
    <>
      <Header />
      <Container>
        <Title>{title}</Title>
        <Wrap>{children}</Wrap>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin-top: 70px;
  padding: 70px 25vw;
  ${tablet({ padding: '20px 10vw' })}
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #404040;
  text-align: center;
  text-decoration: underline #889287;
  text-underline-offset: 8px;
`;

const Wrap = styled.div`
  margin-top: 70px;
`;

export default Layout;
