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
  const checkCodeDone = useInput(false);
  const errPwd = useInput('');
  const errPwdCheck = useInput('');

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
          checkIdDone.onChange(true);
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

  const checkCode = () => {
    if (code.value == codeInput.value) {
      checkCodeDone(true);
    } else {
      alert('인증번호가 일치하지 않습니다.');
    }
  };

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

  // const checkNull =
  //   !checkId.value ||
  //   !checkEmail.value ||
  //   userId.value == '' ||
  //   username.value == '' ||
  //   password.value == '' ||
  //   password.value != passwordCheck.value ||
  //   errPwd.value != '' ||
  //   errPwdCheck.value != '';

  return (
    <Container>
      <ButtonLayout
        title="이메일"
        placeholder="이메일을 입력해주세요."
        btnText="중복확인"
        value={email.value}
        onChange={(e) => {
          email.onChange(e.target.value);
          code.onChange('');
          codeInput.onChange('');
          checkEmailDone.onChange(false);
          checkCodeDone.onChange(false);
        }}
        btnClick={checkEmail}
      />
      {checkEmailDone.value && (
        <ButtonLayout
          title="인증번호"
          placeholder="인증번호를 입력해주세요."
          btnText="확인"
          value={codeInput.value}
          onChange={(e) => {
            codeInput.onChange(e.target.value);
            checkCodeDone.onChange(false);
          }}
          btnClick={checkCode}
        />
      )}
      <ButtonLayout
        title="아이디"
        placeholder="아이디를 입력해주세요."
        btnText="중복확인"
        value={userId.value}
        onChange={(e) => {
          userId.onChange(e.target.value);
          checkIdDone.onChange(false);
        }}
        btnClick={checkId}
      />
      <InputLayout
        type="password"
        title="비밀번호"
        value={password.value}
        onChange={(e) => {
          password.onChange(e.target.value);
          checkPwdRegex(e.target.value);
        }}
        placeholder="비밀번호를 입력해주세요."
      />
      <Error>{errPwd.value}</Error>
      <InputLayout
        type="password"
        title="비밀번호 확인"
        value={passwordCheck.value}
        onChange={(e) => {
          passwordCheck.onChange(e.target.value);
          checkPwdInput(password.value, e.target.value);
        }}
        placeholder="비밀번호를 입력해주세요."
      />
      <Error>{errPwdCheck.value}</Error>
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
