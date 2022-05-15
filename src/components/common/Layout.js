import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import Footer from '../home/Footer';
import Header from '../home/Header';

const Layout = ({ title, width, children }) => {
  return (
    <>
      <Header />
      <Container>
        <Title>{title}</Title>
        <Wrap width={width}>{children}</Wrap>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin-top: 70px;
  padding: 70px 0;
  ${mobile({ padding: '20px 10vw' })}
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
`;

const Title = styled.div`
  width: 800px;
  color: #404040;
  font-size: 32px;
  text-align: center;
  ${mobile({ width: '100%' })}
`;

const Wrap = styled.div`
  width: ${(props) => props.width + 'px' || '800px'};
  ${mobile({ width: '100%' })}
`;

export default Layout;
