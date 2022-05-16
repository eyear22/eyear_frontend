import styled from 'styled-components';
import Test from '../../assets/my.vtt';

const VideoArea = ({ videoId }) => {
  return (
    <Container>
      <Video controls>
        <source src={`http://localhost:5000/${videoId}`} type="video/mp4" />
        <track kind="subtitles" src={Test} srcLang="ko" label="Korean" />
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
