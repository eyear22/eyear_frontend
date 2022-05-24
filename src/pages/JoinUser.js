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

  const sex = useInput(1); // 0:남자, 1:여자

  return (
    <JoinLayout title="개인 회원가입" num="2">
      <JoinTabMenu
        idx={activeIndex}
        title1="1. 병원/환자 정보"
        title2="2. 개인정보"
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
        Component2={<SecondInput activeIndex={activeIndex} sex={sex} />}
      />
    </JoinLayout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrap = styled.div`
  border: 1px solid #626a61;
  display: flex;
`;

export default JoinUser;
