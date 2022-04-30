import styled from 'styled-components';
import UserIcon from '../../assets/icon_user.png';
import { mobile } from '../../utils/responsive';

const SelectBox = () => {
  return (
    <Container>
      <Left>
        <Icon src={UserIcon} alt="" />
      </Left>
      <Right>
        <Desc>영상을 주고 받고 싶다면?</Desc>
        <Title>개인 회원</Title>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #889287;
  border-radius: 10px;
  align-items: center;
  width: 500px;
  height: 160px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  ${mobile({ width: 280, height: 200, flexDirection: 'column', justifyContent: 'center' })}
  &:hover {
    width: 502px;
    height: 162px;
    ${mobile({ width: 282, height: 202 })}
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
