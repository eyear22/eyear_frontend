import styled from 'styled-components';
import Slider from 'react-slick';

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinie: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [{}];
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <h2>1</h2>
        </div>
        <div>
          <h2>2</h2>
        </div>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: aliceblue;
`;

export default ImageSlide;
