import styled from 'styled-components';
import AuthLayout from '../components/common/AuthLayout';
import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInput from '../components/joinUser/FirstInput';
import useInput from '../utils/useInput';

const JoinUser = () => {
  const activeIndex = useInput(0);
  return (
    <AuthLayout title="개인 회원가입">
      <JoinTabMenu
        idx={activeIndex}
        title1="1. 병원/환자 정보"
        title2="2. 개인정보"
        Component1={<FirstInput activeIndex={activeIndex} />}
        Component2={<div />}
      />
    </AuthLayout>
  );
};

export default JoinUser;
