import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const Footer = () => {
  return (
    <Container>
      <Line />
      <Text>
        (주)EYEAR | 사업자 등록번호: 010-1234-5678 이메일: eyear@gmail.com | copyright 2022 EYEAR All Rights Reserved. |
        개인정보취급방침 | 이용약관
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 0;
  background-color: #fff;
`;

const Line = styled.div`
  height: 1px;
  width: 80vw;
  background-color: #363636;
`;

const Text = styled.text`
  width: 80vw;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  ${mobile({ fontSize: '10px' })}
`;

export default Footer;
