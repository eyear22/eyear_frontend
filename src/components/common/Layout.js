import styled from 'styled-components';
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
  padding: 20px 10vw;
`;

const Title = styled.h1`
  color: #404040;
  text-align: center;
`;

export default Layout;
