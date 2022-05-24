import styled from 'styled-components';
import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInput from '../components/joinUser/FirstInput';
import useInput from '../utils/useInput';
import JoinLayout from '../components/common/JoinLayout';

const JoinUser = () => {
  const activeIndex = useInput(0);
  return (
    <JoinLayout title="개인 회원가입" num="2">
      <JoinTabMenu
        idx={activeIndex}
        title1="1. 병원/환자 정보"
        title2="2. 개인정보"
        Component1={<FirstInput activeIndex={activeIndex} />}
        Component2={<div />}
      />
    </JoinLayout>
  );
};

export default JoinUser;
