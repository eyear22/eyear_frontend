import styled from 'styled-components';
import Test from '../../assets/img_home.jpg';
import ImageSlide from './ImageSlide';

const Content = () => {
  return (
    <Container>
      <Image src={Test} />
      <ImageSlide />
      <Wrap>엄마 잘 지내고 있지?</Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const Wrap = styled.div`
  margin-top: 20px;
  line-height: 160%;
  text-decoration: underline;
`;

export default Content;
