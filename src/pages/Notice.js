import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_notice.png';

const Notice = () => {
  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      Notice
    </ImgLayout>
  );
};

export default Notice;
