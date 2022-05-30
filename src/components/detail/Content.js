import styled from 'styled-components';
import ImageSlide from './ImageSlide';

const Content = ({ img, writing }) => {
  return (
    <Container>
      <ImageSlide />
      <Wrap>{writing}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Wrap = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-top: 40px;
  line-height: 160%;
  text-decoration: underline;
  text-decoration-color: #e4e4e4;
  text-underline-offset: 3px;
  white-space: pre-wrap;
`;

export default Content;
