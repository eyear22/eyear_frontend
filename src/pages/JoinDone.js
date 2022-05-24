import styled from 'styled-components';
import JoinLayout from '../components/common/JoinLayout';
import DoneIcon from '../assets/icon_joinDone.png';

const JoinDone = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  const goLogin = () => {
    window.location.href = '/login';
  };

  return (
    <JoinLayout title="회원가입" num="3">
      <Container>
        <Icon src={DoneIcon} />
        <Title>아이어 회원가입이 완료되었습니다.</Title>
        <SubTitle>아이어에서 제공하는 다앙햔 서비스를 이용해보세요.</SubTitle>
        <Wrap>
          <HomeButton onClick={goHome}>홈으로</HomeButton>
          <LoginButton onClick={goLogin}>로그인</LoginButton>
        </Wrap>
      </Container>
    </JoinLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #404040;
  margin: 40px 0;
`;

const Title = styled.h2``;

const SubTitle = styled.div``;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const HomeButton = styled.button`
  width: 140px;
  border: 1px solid #626a61;
  cursor: pointer;
  background-color: #fff;
  color: #626a61;
  padding: 14px;
`;

const LoginButton = styled.button`
  width: 140px;
  border: 1px solid #626a61;
  cursor: pointer;
  background-color: #626a61;
  color: #fff;
  padding: 14px;
`;

export default JoinDone;
