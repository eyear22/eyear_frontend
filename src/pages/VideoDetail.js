import { useEffect, useState } from 'react';
import Test from '../assets/my.vtt';
import styled from 'styled-components';
import { publicRequest } from '../hooks/requestMethods';

const VideoDetail = () => {
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

  if (videoDetail.post_id) {
    return (
      <Container>
        <Title>비디오</Title>
        <Video controls>
          <source src={`http://localhost:5000/${videoDetail.video}`} type="video/mp4" />
          <track kind="subtitles" src={Test} srcLang="ko" label="Korean" />
          없음
        </Video>
      </Container>
    );
  } else {
    return <div>loading...</div>;
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 60px;
`;

const Video = styled.video`
  width: 80%;
`;

export default VideoDetail;
