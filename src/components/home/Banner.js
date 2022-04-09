import styled from 'styled-components';
import HomeImage from '../../assets/img_home.jpg';
import { mobile } from '../../utils/responsive';

const Banner = () => {
  return (
    <Container>
      <Image src={HomeImage} alt="homeImage" />
      <SubTitle>더 뚜렷한 요양병원 소통 플랫폼</SubTitle>
      <Title>아이어</Title>
      <Button>문의하기</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  position: relative;
  margin-top: 70px;
  background-color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

const SubTitle = styled.h2`
  position: absolute;
  color: white;
  font-size: 32px;
  top: 20%;
  left: 10vw;
  ${mobile({ fontSize: 26 })}
`;

const Title = styled.h1`
  position: absolute;
  color: white;
  font-size: 58px;
  top: 27%;
  left: 10vw;
  ${mobile({ fontSize: 40 })}
`;

const Button = styled.button`
  position: absolute;
  color: white;
  left: 10vw;
  bottom: 20%;
  padding: 10px;
  background-color: transparent;
  border: 2px solid #fff;
  font-weight: bold;
  width: 160px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Banner;
