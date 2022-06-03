import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_notice.png';
import TopArea from '../components/notice.js/TopArea';

const Notice = () => {
  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      <TopArea />
    </ImgLayout>
  );
};

export default Notice;
