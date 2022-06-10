import styled from 'styled-components';
import JoinLayout from '../components/common/JoinLayout';
import JoinTabMenu from '../components/common/JoinTabMenu';
import FirstInfo from '../components/joinBusiness/FirstInfo';
import SecondInfo from '../components/joinBusiness/SecondInfo';
import useInput from '../utils/useInput';

const JoinBusiness = () => {
  const activeIndex = useInput(0);
  return (
    <JoinLayout title="기업 회원가입" num="2">
      <JoinTabMenu
        idx={activeIndex}
        Component1={<FirstInfo activeIndex={activeIndex} />}
        Component2={<SecondInfo activeIndex={activeIndex} />}
      />
    </JoinLayout>
  );
};

export default JoinBusiness;
