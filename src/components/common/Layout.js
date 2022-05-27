import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import Footer from '../home/Footer';
import Header from '../home/Header';

const Layout = ({ title, width, children }) => {
  return (
    <>
      <Header />
      <Container>
        <Title width={width}>{title}</Title>
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
  background-color: #f9f9fa;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
`;

const Title = styled.div`
  width: ${(props) => (props.width || 800) + 'px'};
  font-size: 34px;
  text-align: center;
  font-weight: bold;
  ${mobile({ width: '100%' })}
`;

const Wrap = styled.div`
  width: ${(props) => (props.width || 800) + 'px'};
  ${mobile({ width: '100%' })}
`;

export default Layout;
