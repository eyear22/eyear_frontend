import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { publicRequest } from '../hooks/requestMethods';
import { useEffect, useState } from 'react';
import ButtonArea from '../components/detail/ButtonArea';
import Content from '../components/detail/Content';
import VideoArea from '../components/detail/VideoArea';

const LetterData = [
  {
    post_id: 2,
    title: '손자 금쪽이 걸음마 영상',
    content: '',
    img: [],
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
    <Layout title="수영이 걸음마 영상" width={1000}>
      <Container>
        <Info>
          <Date>2022.05.09</Date>
          <From>김수영(딸)</From>
        </Info>
        <Wrap>
          {videoDetail.post_id && <VideoArea videoId={videoDetail.video} />}
          <Content img={LetterData.img} writing={LetterData.content} />
          <ButtonArea />
        </Wrap>
      </Container>
    </Layout>
  );
};

const Container = styled.div``;

const Info = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  color: #808080;
`;

const Date = styled.div`
  font-size: 18px;
`;

const From = styled.div`
  font-size: 16px;
`;

const Wrap = styled.div`
  padding: 7px 8px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  width: ${(props) => props.width || '100%-16px'};
  font-size: 18px;
`;

export default Detail;
