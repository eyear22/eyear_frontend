import styled from 'styled-components';
import Img from '../../assets/img_background.jpg';
import { mobile } from '../../utils/responsive';

const Banner = ({ goContact }) => {
  return (
    <Container>
      <Image src={Img} alt="homeImage" />
      <TextDiv>
        <SubTitle>더 뚜렷한 요양병원 소통 플랫폼</SubTitle>
        <Title>아이어</Title>
        <Button onClick={goContact}>문의하기</Button>
      </TextDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 500px;
  position: relative;
  margin-top: 70px;
  background-color: black;
  ${mobile({ height: 350 })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

const TextDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 100px;
  ${mobile({ left: 40 })}
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 32px;
  ${mobile({ fontSize: 26 })}
`;

const Title = styled.h1`
  color: white;
  font-size: 58px;
  ${mobile({ fontSize: 40 })}
`;

const Button = styled.button`
  margin-top: 80px;
  color: white;
  padding: 10px;
  background-color: transparent;
  border: 2px solid #fff;
  font-weight: bold;
  width: 160px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`;

export default Banner;
