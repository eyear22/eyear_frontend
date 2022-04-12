import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  useEffect(() => {
    axios({
      method: 'post',
      url: `http://localhost:5000/video/getVideoDetail`,
      data: { post_id: 2 },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setVideoDetail(res.data.video);
        } else {
          alert('비디오 fetch 실패');
        }
      })
      .catch((err) => {
        console.log('실패');
      });
  }, []);

  if (videoDetail.post_id) {
    return (
      <Container>
        <Title>비디오</Title>
        <Video controls>
          <source src={`http://localhost:5000/${videoDetail.video}`} type="video/mp4" />
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
