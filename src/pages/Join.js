import styled from 'styled-components';
import AuthLayout from '../components/common/AuthLayout';
import SelectBox from '../components/join/SelectBox';
import UserIcon from '../assets/icon_user.png';
import BusinessIcon from '../assets/icon_hospital.png';

const Join = () => {
  const goJoinUser = () => {
    window.location.href = '/join/user';
  };

  const goJoinBusiness = () => {
    window.location.href = '/join/business';
  };

  return (
    <AuthLayout title="회원가입">
      <Center>
        <BigDesc>
          <StyledText>아이어</StyledText>에 오신것을 환영합니다.
        </BigDesc>
        <SmallDesc>아이어에서 제공하는 다앙햔 서비스를 이용해보세요.</SmallDesc>
      </Center>
      <Bottom>
        <SelectBox Img={UserIcon} title="개인 회원" desc="영상을 주고 받고 싶다면?" onClick={goJoinUser} />
        <SelectBox Img={BusinessIcon} title="기업 회원" desc="병원을 등록하고 관리하려면?" onClick={goJoinBusiness} />
      </Bottom>
    </AuthLayout>
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
