import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlide = ({ img, bucketName }) => {
  const settings = {
    dots: true,
    infinie: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
  };

  const images = img.map((v, key) => {
    return { key: key, image: bucketName + v.image };
  });

  return (
    <StyledSlider {...settings}>
      {images.map(({ key, image }) => {
        return (
          <CardBox key={image}>
            <CardImg src={image} />
          </CardBox>
        );
      })}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)``;

const CardBox = styled.div``;

const CardImg = styled.img`
  object-fit: cover;
  max-height: 500px;
  width: 100%;
`;

export default ImageSlide;
