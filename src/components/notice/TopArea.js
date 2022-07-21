import styled from 'styled-components';

const TopArea = () => {
  return (
    <Container>
      <Title>공지사항</Title>
      <Desc>아이어의 새로운 소식과 공지를 확인해보세요!</Desc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2``;

const Desc = styled.div`
  color: #999999;
  font-size: 14px;
  margin-bottom: 40px;
`;

export default TopArea;
