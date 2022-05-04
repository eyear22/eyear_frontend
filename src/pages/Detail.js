import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Test from '../assets/my.vtt';
import { publicRequest } from '../hooks/requestMethods';
import { useEffect, useState } from 'react';

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
      <Wrap>
        <Title>보낸 사람</Title>
        <Sender>김대식</Sender>
      </Wrap>
      <Wrap>
        <Title>파일</Title>
        <File>{'금쪽.mp4' + '\n' + '금쪽이랑_가족사진.png'}</File>
      </Wrap>
      <Wrap>
        <Video controls>
          <source src={`http://localhost:5000/${videoDetail.video}`} type="video/mp4" />
          <track kind="subtitles" src={Test} srcLang="ko" label="Korean" />
          없음
        </Video>
      </Wrap>
      <Wrap>
        <Title>내용</Title>
        <Content>아아아</Content>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.text``;

const Sender = styled.text``;

const File = styled.text``;

const Video = styled.video``;

const Content = styled.text``;

export default Detail;
