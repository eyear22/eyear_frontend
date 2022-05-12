import styled from 'styled-components';
import ImageSlide from './ImageSlide';

const Content = ({ img, writing }) => {
  return (
    <Container>
      <ImageSlide />
      <Wrap>
        {'엄마 잘 지내고 있지?'} <div /> {'나'}
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Wrap = styled.div`
  margin-top: 20px;
  line-height: 160%;
  text-decoration: underline;
`;

export default Content;
