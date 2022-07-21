import styled from 'styled-components';

const NoticeDetail = () => {
  return (
    <>
      <Wrap>
        <Title>서비스 일시 중지안내(07/21)</Title>
        <Line />
      </Wrap>
    </>
  );
};

const Wrap = styled.div``;

const Title = styled.h1`
  font-size: 26px;
`;

const Line = styled.div`
  width: 100px;
  height: 10px;
  color: #222;
`;

export default NoticeDetail;
