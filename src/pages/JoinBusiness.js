import styled from 'styled-components';
import JoinLayout from '../components/common/JoinLayout';
import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInfo from '../components/joinBusiness/FirstInfo';
import SecondInfo from '../components/joinBusiness/SecondInfo';
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
          <SecondInfo activeIndex={activeIndex} email={email} password={password} passwordCheck={passwordCheck} />
        }
      />
    </JoinLayout>
  );
};

export default JoinBusiness;
