import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const SelectBox = ({ Img, title, desc, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Left>
        <Icon src={Img} alt="" />
      </Left>
      <Right>
        <Desc>{desc}</Desc>
        <Title>{title}</Title>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #889287;
  border-radius: 10px;
  align-items: center;
  width: 500px;
  height: 160px;
  margin-bottom: 20px;
  cursor: pointer;
  ${mobile({ width: 280, height: 200, flexDirection: 'column', justifyContent: 'center' })}
  &:hover {
    background-color: #f9f9fa;
  }
`;

const Left = styled.div`
  margin: 0 50px;
`;

const Icon = styled.img`
  width: 90px;
  height: 90px;
`;

const Right = styled.div`
  ${mobile({ textAlign: 'center', marginTop: 10 })}
`;

const Desc = styled.text`
  color: #737272;
  font-size: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

export default SelectBox;
