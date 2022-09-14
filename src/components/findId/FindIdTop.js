import styled from 'styled-components';

const FindIdTop = () => {
  return (
    <>
      <Container>
        <Question>아이디가 생각나지 않으세요?</Question>
        <Desc>등록하신 이름과 이메일 주소를 입력해주세요.</Desc>
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-top: 65px;
`;

const Question = styled.h1`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  text-align: center;
  color: #1a1a1a;
`;

const Desc = styled.h1`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #5c5c5c;
`;

export default FindIdTop;
