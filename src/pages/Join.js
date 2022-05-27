import styled from 'styled-components';
import SelectBox from '../components/join/SelectBox';
import UserIcon from '../assets/icon_user.png';
import BusinessIcon from '../assets/icon_hospital.png';
import JoinLayout from '../components/common/JoinLayout';
import { useGoBusiness, useGoJoinUser } from '../hooks/navigateHooks';

const Join = () => {
  return (
    <JoinLayout title="회원가입" num="1">
      <Bottom>
        <SelectBox Img={UserIcon} title="개인 회원" desc="영상을 주고 받고 싶다면?" onClick={useGoJoinUser()} />
        <SelectBox Img={BusinessIcon} title="기업 회원" desc="병원을 등록하고 관리하려면?" onClick={useGoBusiness()} />
      </Bottom>
    </JoinLayout>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const StyledText = styled.text`
  color: #889287;
  font-weight: bold;
  font-size: 24px;
`;

const BigDesc = styled.text`
  font-size: 24px;
`;

const SmallDesc = styled.text`
  font-size: 10px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Join;
