import styled from 'styled-components';
import { publicRequest } from '../../hooks/requestMethods';
import { mobile } from '../../utils/responsive';
import useInput from '../../utils/useInput';

const SecondInput = ({ activeIndex, email, userId, sex, username, password, passwordCheck, join }) => {
  // 아이디/이메일 체크여부
  const checkId = useInput(false);
  const checkEmail = useInput(false);

  const errPwd = useInput('');
  const errPwdCheck = useInput('');
  // 이전 버튼 눌렀을 때
  const onPrev = () => activeIndex.onChange(0);
  // 성별 선택
  const changeSex = (v) => sex.onChange(v);

  // 비밀번호 형식 확인
  const checkPwdRegex = (pwd) => {
    if (pwd == ' ' || pwd == '') {
      errPwd.onChange('비밀번호를 입력해주세요.');
    } else if (
      !/[0-9]/.test(pwd) ||
      !/[a-zA-Z]/.test(pwd) ||
      !/[~!@#$%<>^&*]/.test(pwd) ||
      pwd.length < 8 ||
      pwd.length > 16
    ) {
      errPwd.onChange('8~16문자 영문, 숫자, 특수문자를 사용하세요.');
    } else {
      errPwd.onChange('');
    }
  };

  // 비밀번호 확인
  const checkPwdInput = (pwd, checkPwd) => {
    if (pwd == checkPwd) {
      errPwdCheck.onChange('');
    } else {
      errPwdCheck.onChange('비밀번호가 일치하지 않습니다.');
    }
  };

  // 이메일 확인
  const confirmEmail = async () => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email.value == '') {
      alert('이메일을 입력해주세요.');
    } else if (!regex.test(email.value)) {
      alert('이메일 형식이 올바르지 않습니다.');
    } else {
      try {
        // 이메일 중복 확인
        const res = await publicRequest.get(`/join/user_email_check/${email.value}`);
        if (res.data == 'exit') alert('중복되는 이메일이 있습니다.');
        else {
          alert('사용가능한 이메일입니다.');
          checkEmail.onChange(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // 아이디 확인
  const confirmId = async () => {
    try {
      // 아이디 중복 확인
      const res = await publicRequest.get(`/join/user_id_check/${userId.value}`);
      if (res.data == 'exit') alert('중복되는 아이디가 있습니다.');
      else {
        alert('사용가능한 아이디입니다.');
        checkId.onChange(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // null값이 있는지 확인
  const checkNull =
    !checkId.value ||
    !checkEmail.value ||
    userId.value == '' ||
    username.value == '' ||
    password.value == '' ||
    password.value != passwordCheck.value;

  return (
    <Container>
      <Wrap>
        <Title>이메일</Title>
        <Right>
          <Input
            value={email.value}
            onChange={(e) => {
              email.onChange(e.target.value);
              checkEmail.onChange(false);
            }}
            placeholder="이메일을 입력해주세요."
          />
          <RightButton onClick={confirmEmail}>중복확인</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>아이디</Title>
        <Right>
          <Input
            value={userId.value}
            onChange={(e) => {
              userId.onChange(e.target.value);
              checkId.onChange(false);
            }}
            placeholder="아이디를 입력해주세요."
          />
          <RightButton onClick={confirmId}>중복확인</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>성별</Title>
        <SelectArea>
          <SelectDiv active={!sex.value} onClick={() => changeSex(0)}>
            남자
          </SelectDiv>
          <SelectDiv active={sex.value} onClick={() => changeSex(1)}>
            여자
          </SelectDiv>
        </SelectArea>
      </Wrap>
      <Wrap>
        <Title>이름</Title>
        <FullInput
          value={username.value}
          onChange={(e) => username.onChange(e.target.value)}
          placeholder="이름을 입력해주세요."
        />
      </Wrap>
      <Wrap style={{ margin: 0 }}>
        <Title>비밀번호</Title>
        <FullInput
          value={password.value}
          onChange={(e) => {
            password.onChange(e.target.value);
            checkPwdRegex(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        />
      </Wrap>
      <Error style={{ marginBottom: 10 }}>{errPwd.value}</Error>
      <Wrap style={{ margin: 0 }}>
        <Title>비밀번호 확인</Title>
        <FullInput
          value={passwordCheck.value}
          onChange={(e) => {
            passwordCheck.onChange(e.target.value);
            checkPwdInput(password.value, e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        />
      </Wrap>
      <Error>{errPwdCheck.value}</Error>
      <Bottom>
        <NextButton onClick={() => onPrev()}>이전</NextButton>
        <NextButton disabled={checkNull} onClick={() => join()}>
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

const SelectArea = styled.div`
  display: flex;
  width: 330px;
  border: 1px solid #d7d7d7;
  height: 32px;
  ${mobile({ width: 260 })}
`;

const SelectDiv = styled.div`
  display: flex;
  width: 165px;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#889287' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#black')};
  font-size: 14px;
  ${mobile({ width: 130 })}
`;

const Error = styled.div`
  margin-left: 135px;
  color: red;
  font-size: 10px;
  ${mobile({ marginLeft: 0 })}
`;

export default SecondInput;
