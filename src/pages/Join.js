import styled from 'styled-components';
import AuthLayout from '../components/common/AuthLayout';

const Join = () => {
  return (
    <AuthLayout title="회원가입">
      <Center>
        <BigDesc>
          <StyledText>아이어</StyledText>에 오신것을 환영합니다.
        </BigDesc>
        <SmallDesc>아이어에서 제공하는 다앙햔 서비스를 이용해보세요.</SmallDesc>
      </Center>
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

export default Join;
