import styled from 'styled-components';
import { tablet } from '../../utils/responsive';
import Footer from '../home/Footer';
import Header from '../home/Header';

const Layout = ({ title, children }) => {
  return (
    <>
      <Header />
      <Wrap>
        <Title>{title}</Title>
        {children}
      </Wrap>
      <Footer />
    </>
  );
};

const Wrap = styled.div`
  margin-top: 70px;
  padding: 50px 20vw;
  ${tablet({ padding: '20px 10vw' })}
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #404040;
  text-align: center;
`;

export default Layout;
