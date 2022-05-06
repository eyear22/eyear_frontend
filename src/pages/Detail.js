import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Test from '../assets/my.vtt';
import { publicRequest } from '../hooks/requestMethods';
import { useEffect, useState } from 'react';
import ItemLayout from '../components/detail/ItemLayout';
import ButtonArea from '../components/detail/ButtonArea';
import Content from '../components/detail/Content';

const LetterData = [
  {
    post_id: 2,
    title: '손자 금쪽이 걸음마 영상',
    content: '',
    file: ['파일1.mp4', '파일2.png', '파일3.png'],
    from: '',
    to: '',
  },
];

const Detail = () => {
  const [data, setData] = useState(LetterData);
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
        <ItemLayout title="내용">
          <Content />
        </ItemLayout>
        <ButtonArea />
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
