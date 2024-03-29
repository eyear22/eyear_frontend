import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { publicRequest } from '../hooks/requestMethods';
import { useEffect, useState } from 'react';
import ButtonArea from '../components/receiveDetail/ButtonArea';
import VideoArea from '../components/common/VideoArea';
import UserIcon from '../assets/icon_from.png';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentLayout from '../components/common/ContentLayout';

// 임의로 추가
const bucketName = 'https://storage.cloud.google.com/swu-eyear/';

const Detail = () => {
  const { postId } = useParams();
  const [data, setData] = useState([]);
  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 상세 데이터 불러오기
  useEffect(() => {
    const detailRequest = async () => {
      const res = await publicRequest.get(`receiveDetail/${user.flag}/${postId}`);
      console.log(res.data);
      setData(res.data);
    };
    detailRequest();
  }, []);

  if (data.length != 0) {
    return (
      <Layout title={data.detail.title} width={800}>
        <Container>
          <Info>
            <From>
              <Icon src={UserIcon} />
              {user.flag == 0
                ? '보낸 사람 : ' + data.from.pat_name
                : '보낸 사람 : ' + data.from.username + ', ' + data.relation.relation}
            </From>
            <Date>{data.date}</Date>
          </Info>
          {data.video.length != 0 && <VideoArea videoId={bucketName + data.video[0].video} url={data.videourl} />}
          <ContentLayout img={data.image} content={data.detail.content} bucketName={bucketName} />
          <ButtonArea />
        </Container>
      </Layout>
    );
  }
};

const Container = styled.div``;

const Info = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  color: #252525;
  align-items: center;
`;

const Date = styled.div`
  font-size: 18px;
`;

const From = styled.div`
  font-size: 16px;
`;

const Icon = styled.img`
  width: 12px;
  margin-right: 5px;
`;

export default Detail;
