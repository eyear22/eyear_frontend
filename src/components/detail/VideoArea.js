import styled from 'styled-components';
import VTT from '../../vtt/test.vtt';

const VideoArea = ({ videoId, url }) => {
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
