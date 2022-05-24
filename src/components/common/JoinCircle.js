import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const JoinCircle = ({ num }) => {
  return (
    <Container>
      <Content>
        <Circle check={0 < num}>1</Circle>
        <Desc>회원유형선택</Desc>
      </Content>
      <Wrap>
        <Line />
      </Wrap>
      <Content>
        <Circle check={1 < num}>2</Circle>
        <Desc>정보입력</Desc>
      </Content>
      <Wrap>
        <Line />
      </Wrap>
      <Content>
        <Circle check={2 < num}>3</Circle>
        <Desc>가입완료</Desc>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
`;

const Content = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: center;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: ${(props) => (props.check ? '#fff' : '#889287')};
  background-color: ${(props) => (props.check ? '#889287' : '#fff')};
  border: 1px solid #889287;
`;

const Line = styled.div`
  background-color: #889287;
  height: 1px;
  width: 100%;
  align-items: center;
`;

const Desc = styled.div`
  color: #889287;
  margin-top: 20px;
  ${mobile({ fontSize: 14 })}
`;

export default JoinCircle;
