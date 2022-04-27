import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const ButtomArea = () => {
  return (
    <Container>
      <Wrap>
        <Title>아직 아이어 회원이 아니신가요?</Title>
        <SubTitle>회원가입하고 다양한 서비스를 이용해보세요.</SubTitle>
      </Wrap>
      <Button>회원가입</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
  ${mobile({ flexDirection: 'column', alignItems: 'flex-start' })}
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.text`
  font-size: 14px;
  font-weight: bold;
`;

const SubTitle = styled.text`
  margin-top: 3px;
  font-size: 12px;
`;

const Button = styled.button`
  font-size: 12px;
  border: 1px solid #898989;
  background-color: #fff;
  padding: 0px 14px;
  cursor: pointer;
  height: 28px;
  ${mobile({ marginTop: 10 })}
`;

export default ButtomArea;
