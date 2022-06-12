import styled from 'styled-components';
import Test from '../../assets/my.vtt';
import VTT from '../../vtt/test.vtt';
// https://storage.googleapis.com/myeyearbucket2022/subtitle/%E1%84%82%E1%85%A2%E1%84%85%E1%85%B5%E1%86%B7_%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A1%E1%84%8E%E1%85%A5%E1%86%AF2.vtt
const VideoArea = ({ videoId, url }) => {
  //const src = 'http://localhost:5000/uploads/1654844234760.mp4';
  return (
    <Container>
      <Video controls crossorigin="anonymous">
        <source src={videoId} type="video/mp4" />
        <track kind="subtitles" src={VTT} srcLang="ko" label="Korean" />
        없음
      </Video>
    </Container>
  );
};

const Container = styled.div``;

const Video = styled.video`
  width: 100%;
`;

export default VideoArea;
