import styled from 'styled-components';
import ImageSlide from './ImageSlide';

const Content = ({ img, writing }) => {
  return (
    <Container>
      <ImageSlide />
      <Wrap>
        {'엄마 잘 지내고 있지?'} <div /> {'나'}
        <div /> {'엄마 잘 지내고 있지?'}
        <div /> {'엄마 잘 지내고 있지?'}
        <div /> {'엄마 잘 지내고 있지?'}
        <div /> {'엄마 잘 지내고 있지?'}
      </Wrap>
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
`;

export default Content;
