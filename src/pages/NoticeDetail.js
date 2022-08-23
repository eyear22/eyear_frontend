import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TopImg from '../assets/img_notice.png';
import ImgLayout from '../components/common/ImgLayout';
import TopArea from '../components/notice/TopArea';
import { publicRequest } from '../hooks/requestMethods';

const NoticeDetail = () => {
  const { id } = useParams();

  // 상세 데이터 불러오기
  useEffect(() => {
    const detailRequest = async () => {
      const res = await publicRequest.get(`/notice/detail/${id}`);
      console.log(res.data);
    };
    detailRequest();
  }, []);

  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      <TopArea />
      {console.log(id)}
      <Wrap>
        <Title>서비스 일시 중지안내(07/21)</Title>
        <HR />
        <Desc>서비스 일시 중지안내 관련 공지사항 입니다.</Desc>
      </Wrap>
      <Button onClick={() => (window.location.href = '/notice')}>목록</Button>
    </ImgLayout>
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
