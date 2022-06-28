import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const SecondInfo = ({ activeIndex, email, userId, password, passwordCheck, join }) => {
  // 이전 버튼 눌렀을 때
  const onPrev = () => activeIndex.onChange(0);
  return (
    <Container>
      <Wrap>
        <Title>이메일</Title>
        <Right>
          <Input
            value={email.value}
            onChange={(e) => {
              email.onChange(e.target.value);
            }}
            placeholder="이메일을 입력해주세요."
          />
          <RightButton>중복확인</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>아이디</Title>
        <Right>
          <Input
            value={userId.value}
            onChange={(e) => {
              userId.onChange(e.target.value);
            }}
            placeholder="아이디를 입력해주세요."
          />
          <RightButton>중복확인</RightButton>
        </Right>
      </Wrap>
      <Wrap style={{ margin: 0 }}>
        <Title>비밀번호</Title>
        <FullInput
          type="password"
          value={password.value}
          onChange={(e) => {
            password.onChange(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        />
      </Wrap>
      {/* <Error style={{ marginBottom: 10 }}>{errPwd.value}</Error> */}
      <Wrap style={{ margin: 0 }}>
        <Title>비밀번호 확인</Title>
        <FullInput
          type="password"
          value={passwordCheck.value}
          onChange={(e) => {
            passwordCheck.onChange(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        />
      </Wrap>
      {/* <Error>{errPwdCheck.value}</Error> */}
      <Bottom>
        <NextButton onClick={() => onPrev()}>이전</NextButton>
        <NextButton disabled={false} onClick={() => join()}>
          회원가입
        </NextButton>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', alignItems: 'normal' })}
`;

const Title = styled.div`
  margin-right: 20px;
`;

const Right = styled.div``;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: 1px solid #d7d7d7;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  ${mobile({ width: 130 })}
`;

const FullInput = styled.input`
  padding: 10px;
  width: 310px;
  border: 1px solid #d7d7d7;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  ${mobile({ width: 240 })}
`;

const RightButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background-color: #889287;
  color: #fff;
  width: 100px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  width: 220px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  background-color: #626a61;
  color: #fff;
  padding: 10px;
  &:disabled {
    cursor: default;
    background-color: #d8d8d8;
  }
`;

const Error = styled.div`
  margin-left: 135px;
  color: red;
  font-size: 10px;
  ${mobile({ marginLeft: 0 })}
`;

export default SecondInfo;
