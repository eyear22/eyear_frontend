import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_notice.png';
import TopArea from '../components/notice/TopArea';
import FilterSelect from '../components/notice/FilterSelect';
import useInput from '../utils/useInput';
import NoticeTable from '../components/notice/NoticeTable';

const dummy = [
  {
    post_id: 0,
    title: '7월 식단입니다.',
    from: '관리자',
    createdAt: '2022-07-19',
  },
  {
    post_id: 1,
    title: '7월 일정입니다.',
    from: '관리자',
    createdAt: '2022-07-20',
  },
];

const Notice = () => {
  const input = useInput('');
  const filter = useInput('from');

  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      <Wrap>
        <TopArea />
        <FilterSelect filter={filter} input={input} />
        <NoticeTable list={dummy} isNotNull={true} />
      </Wrap>
    </ImgLayout>
  );
};

const Wrap = styled.div``;

export default Notice;
