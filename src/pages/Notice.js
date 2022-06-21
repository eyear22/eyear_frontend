import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_notice.png';
import TopArea from '../components/notice/TopArea';
import FilterSelect from '../components/notice/FilterSelect';
import useInput from '../utils/useInput';

const Notice = () => {
  const input = useInput('');
  const filter = useInput('from');
  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      <TopArea />
      <FilterSelect filter={filter} input={input} />
    </ImgLayout>
  );
};

export default Notice;
