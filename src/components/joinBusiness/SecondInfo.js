import styled from 'styled-components';
import { publicRequest } from '../../hooks/requestMethods';
import { mobile } from '../../utils/responsive';
import useInput from '../../utils/useInput';
import ButtonLayout from './ButtonLayout';
import InputLayout from './InputLayout';

const SecondInfo = ({ activeIndex, email, userId, password, passwordCheck, join }) => {
  // 이전 버튼 눌렀을 때
  const onPrev = () => activeIndex.onChange(0);
  const code = useInput('');
  const codeInput = useInput('');
  const checkIdDone = useInput(false);
  const checkEmailDone = useInput(false);

  const checkId = async () => {
    if (checkId.value == '') {
      alert('아이디를 입력해주세요.');
    } else {
      try {
        // 아이디 중복 확인
        const res = await publicRequest.get(`/join/business_id_check/${userId.value}`);
        if (res.data == 'exit') {
          alert('중복되는 아이디가 있습니다.');
          userId.onChange('');
        } else {
          alert('사용가능한 아이디입니다.');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const checkEmail = async () => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email.value == '') {
      alert('이메일을 입력해주세요.');
    } else if (!regex.test(email.value)) {
      alert('이메일 형식이 올바르지 않습니다.');
      email.onChange('');
    } else {
      try {
        const res = await publicRequest.get(`/join/email_check/${email.value}`);
        if (res.data == 'exit') {
          alert('중복되는 이메일이 있습니다.');
          email.onChange('');
        } else {
          alert('인증번호가 전송되었습니다');
          checkEmailDone.onChange(true);
          code.onChange(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <ButtonLayout
        title="이메일"
        placeholder="이메일을 입력해주세요."
        btnText="중복확인"
        value={email.value}
        onChange={(e) => {
          email.onChange(e.target.value);
          checkEmailDone.onChange(false);
        }}
        btnClick={checkEmail}
      />
      {checkEmailDone.value && (
        <ButtonLayout
          title="인증번호"
          placeholder="인증번호를 입력해주세요."
          btnText="확인"
          value={codeInput.value}
          onChange={(e) => codeInput.onChange(e.target.value)}
          btnClick={() => console.log('d')}
        />
      )}

      <ButtonLayout
        title="아이디"
        placeholder="아이디를 입력해주세요."
        btnText="중복확인"
        value={userId.value}
        onChange={(e) => userId.onChange(e.target.value)}
        btnClick={checkId}
      />
      <InputLayout
        title="비밀번호"
        value={password.value}
        onChange={(e) => password.onChange(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
      />
      {/* <Error>s</Error> */}
      <InputLayout
        title="비밀번호 확인"
        value={passwordCheck.value}
        onChange={(e) => passwordCheck.onChange(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
      />
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
  position: relative;
  bottom: 20px;
  margin-left: 135px;
  color: red;
  font-size: 10px;
  ${mobile({ marginLeft: 0 })}
`;

export default SecondInfo;
