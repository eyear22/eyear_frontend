import styled from 'styled-components';
import JoinLayout from '../components/common/JoinLayout';
import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInfo from '../components/joinBusiness/FirstInfo';
import SecondInfo from '../components/joinBusiness/SecondInfo';
import { useGoJoin } from '../hooks/navigateHooks';
import { publicRequest } from '../hooks/requestMethods';
import useInput from '../utils/useInput';

const JoinBusiness = () => {
  const activeIndex = useInput(0);
  const hosNum = useInput('');
  const hosName = useInput('');
  const hosPhone = useInput('');
  const hosAdress = useInput('');
  const hosAdressDetail = useInput('');

  const email = useInput('');
  const userId = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const goJoinDone = () => {
    window.location.replace('/join/done');
  };

  // 회원가입 함수
  const join = async () => {
    try {
      const res = await publicRequest.post('/join/business', {
        hid: userId.value, // 기업 아이디
        password: password.value,
        hos_name: hosName.value,
        address: hosAdress.value + ' ' + hosAdressDetail.value,
        hos_number: hosPhone.value,
        email: email.value,
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
    <JoinLayout title="기업 회원가입" num="2">
      <JoinTabMenu
        idx={activeIndex}
        Component1={
          <FirstInfo
            activeIndex={activeIndex}
            hosNum={hosNum}
            hosName={hosName}
            hosPhone={hosPhone}
            hosAdress={hosAdress}
            hosAdressDetail={hosAdressDetail}
          />
        }
        Component2={
          <SecondInfo
            activeIndex={activeIndex}
            email={email}
            userId={userId}
            password={password}
            passwordCheck={passwordCheck}
            join={join}
          />
        }
      />
    </JoinLayout>
  );
};

export default JoinBusiness;
