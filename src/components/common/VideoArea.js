import styled from 'styled-components';
import VTT from '../../vtt/finaltest.vtt';

// 상세페이지 비디오 영역 레이아웃
const VideoArea = ({ videoId, url }) => {
  return (
    <Container>
      <Video controls crossorigin="anonymous">
        <source src={videoId} type="video/mp4" />
        {/* <track kind="subtitles" src={VTT} srcLang="ko" label="Korean" /> */}
      </Video>
    </Container>
  );
};

const Container = styled.div``;

const Video = styled.video`
  width: 100%;
`;

export default VideoArea;
