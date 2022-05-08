import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Test from '../../assets/img_home.jpg';

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinie: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  const data = [
    { key: 0, image: Test },
    { key: 1, image: Test },
  ];
  return (
    <StyledSlider {...settings}>
      {data.map(({ key, image }) => {
        return (
          <CardBox key={key}>
            <CardImg src={image} />
          </CardBox>
        );
      })}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    color: #889287;
  }
  margin: 10px 20px;
`;

const CardBox = styled.div``;

const CardImg = styled.img`
  width: 100%;
`;

export default ImageSlide;
