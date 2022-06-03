import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInput from '../components/joinUser/FirstInput';
import useInput from '../utils/useInput';
import JoinLayout from '../components/common/JoinLayout';
import SecondInput from '../components/joinUser/SecondInput';
import { publicRequest } from '../hooks/requestMethods';
import { useGoJoin } from '../hooks/navigateHooks';

const JoinUser = () => {
  const activeIndex = useInput(0);
  const hospitalName = useInput('');
  const patientId = useInput('');
  const patientNum = useInput('');
  const patientName = useInput('');
  const patientBirth = useInput('');
  const relation = useInput('');

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
  const join = async () => {
    try {
      const res = await publicRequest.post('/join/user', {
        uid: userId.value, // 개인 아이디
        password: password.value,
        email: email.value,
        username: username.value,
        sex: sex.value == 1 ? 'female' : 'male',
        pat_id: patientId.value, // 환자 고유 번호
        relation: relation.value,
      });
      if (res.data == 'join success') {
        goJoinDone();
      } else {
        alert('회원가입에 실패하였습니다.');
        useGoJoin();
      }
    } catch (err) {
      console.log(err);
    }
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
            patientNum={patientNum}
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
