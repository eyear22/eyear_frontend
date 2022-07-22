import styled from 'styled-components';

const NoticeDetail = () => {
  return (
    <>
      <Wrap>
        <Title>서비스 일시 중지안내(07/21)</Title>
        <HR />
        <Desc>서비스 일시 중지안내 관련 공지사항 입니다.</Desc>
      </Wrap>
      <Button>목록</Button>
    </>
  );
};

const Wrap = styled.div`
  min-height: 400px;
`;

const Title = styled.h1`
  font-size: 26px;
`;

const HR = styled.hr`
  margin: 20px 0;
`;

const Desc = styled.div``;

const Button = styled.button`
  background-color: #889287;
  padding: 10px;
  width: 160px;
  color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  cursor: pointer;
`;

export default NoticeDetail;
