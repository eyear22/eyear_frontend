import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TopImg from '../assets/img_notice.png';
import ImgLayout from '../components/common/ImgLayout';
import TopArea from '../components/notice/TopArea';
import { publicRequest } from '../hooks/requestMethods';

const NoticeDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  // 상세 데이터 불러오기
  useEffect(() => {
    const detailRequest = async () => {
      const res = await publicRequest.get(`/notice/detail/${id}`);
      console.log(res.data);
      setData(res.data);
    };
    detailRequest();
  }, []);

  if (data.length != 0) {
    return (
      <ImgLayout title="공지사항" src={TopImg} width={900}>
        <TopArea />
        <Wrap>
          <TitleArea>
            <Title>{data.title}</Title>
            <ButtonArea>
              <button>수정</button>
              <button>삭제</button>
            </ButtonArea>
          </TitleArea>
          <HR />
          <Desc>{data.content}</Desc>
        </Wrap>
        <Button onClick={() => (window.location.href = '/notice')}>목록</Button>
      </ImgLayout>
    );
  }
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

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  button {
    border: none;
    color: #889287;
    background-color: #fff;
    box-shadow: 2px 2px 4px 2px #dfdfdf;
    padding: 8px;
    border-radius: 6px;
    width: 120px;
    cursor: pointer;
    &:nth-child(2n + 1) {
      margin-right: 18px;
    }
  }
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
