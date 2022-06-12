import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { publicRequest } from '../hooks/requestMethods';
import { useEffect, useState } from 'react';
import ButtonArea from '../components/detail/ButtonArea';
import Content from '../components/detail/Content';
import VideoArea from '../components/detail/VideoArea';
import UserIcon from '../assets/icon_from.png';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListButton from '../components/sendDetail/ListButton';

// 임의로 추가
const bucketName = 'https://storage.cloud.google.com/myeyearbucket2022/';

const SendDetail = () => {
  const { postId } = useParams();
  const [data, setData] = useState([]);
  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 상세 데이터 불러오기
  useEffect(() => {
    const detailRequest = async () => {
      const res = await publicRequest.get(`/SendDetail/${user.flag}/${postId}`);
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
              {'받는 사람 : ' + data.to.pat_name}
            </From>
            <Date>{data.date}</Date>
          </Info>
          {data.video.length != 0 && <VideoArea videoId={bucketName + data.video[0].video} />}
          {data.image.length != 0 && <Content img={data.image} content={data.detail.content} bucketName={bucketName} />}
          <ListButton />
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

export default SendDetail;
