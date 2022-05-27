import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import Footer from '../home/Footer';
import Header from '../home/Header';

const ImgLayout = ({ title, src, width, children }) => {
  return (
    <>
      <Header />
      <Title width={width}>{title}</Title>
      <Image src={src} />
      <Container>
        <Wrap width={width}>{children}</Wrap>
      </Container>
      <Footer />
    </>
  );
};

const Title = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  color: #fff;
  font-size: 34px;
  text-align: center;
  font-weight: bold;
  transform: translate(-50%, 0);
  ${mobile({ width: '100%' })}
`;

const Container = styled.div`
  ${mobile({ padding: '20px 10vw' })}
  background-color: #f9f9fa;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
`;

const Wrap = styled.div`
  width: ${(props) => (props.width || 800) + 'px'};
  ${mobile({ width: '100%' })}
`;

const Image = styled.img`
  margin-top: 70px;
  width: 100vw;
  height: 200px;
  object-fit: cover;
`;

export default ImgLayout;
