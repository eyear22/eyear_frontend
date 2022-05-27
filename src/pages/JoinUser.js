import styled from 'styled-components';
import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInput from '../components/joinUser/FirstInput';
import useInput from '../utils/useInput';
import JoinLayout from '../components/common/JoinLayout';
import SecondInput from '../components/joinUser/SecondInput';

const JoinUser = () => {
  const activeIndex = useInput(0);
  const hospitalName = useInput('');
  const patientId = useInput('');
  const patientName = useInput('');
  const patientBirth = useInput('');
  const relation = useInput('sun');

  const email = useInput('');
  const userId = useInput('');
  const sex = useInput(1); // 0:남자, 1:여자
  const username = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const goJoinDone = () => {
    window.location.replace('/join/done');
  };

  // 회원가입 함수
  const join = () => {
    console.log('병원이름', hospitalName.value);
    console.log('환자 번호', patientId.value);
    console.log('환자와의 관계', relation.value);
    console.log('이메일', email.value);
    console.log('아이디', userId.value);
    console.log('성별', sex.value);
    console.log('이름', username.value);
    console.log('비밀번호', password.value);
    goJoinDone();
  };

  return (
    <JoinLayout title="개인 회원가입" num="2">
      <JoinTabMenu
        idx={activeIndex}
        Component1={
          <FirstInput
            activeIndex={activeIndex}
            hospitalName={hospitalName}
            patientId={patientId}
            patientName={patientName}
            patientBirth={patientBirth}
            relation={relation}
          />
        }
        Component2={
          <SecondInput
            activeIndex={activeIndex}
            email={email}
            userId={userId}
            sex={sex}
            username={username}
            password={password}
            passwordCheck={passwordCheck}
            join={join}
          />
        }
      />
    </JoinLayout>
  );
};

export default JoinUser;
