import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Test from '../assets/my.vtt';
import { publicRequest } from '../hooks/requestMethods';
import { useEffect, useState } from 'react';
import ItemLayout from '../components/detail/ItemLayout';

const Detail = () => {
  const [videoDetail, setVideoDetail] = useState([]);

  // 비디오 불러오기
  useEffect(() => {
    const videoRequest = async () => {
      const res = await publicRequest.post('/video/getVideoDetail', {
        post_id: 2,
      });
      setVideoDetail(res.data.video);
    };
    videoRequest();
  }, []);

  return (
    <Layout title="손자 금쪽이 걸음마 영상">
      <Container>
        <ItemLayout title="보낸 사람" width="50%">
          김대식
        </ItemLayout>
        <ItemLayout title="파일">
          파일이름1
          <br />
          파일이름2
        </ItemLayout>
        {videoDetail.post_id && (
          <Video controls>
            <source src={`http://localhost:5000/${videoDetail.video}`} type="video/mp4" />
            <track kind="subtitles" src={Test} srcLang="ko" label="Korean" />
            없음
          </Video>
        )}
        <ItemLayout title="내용">아이어</ItemLayout>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;

const Video = styled.video`
  width: 100%;
  margin-bottom: 20px;
`;

export default Detail;
