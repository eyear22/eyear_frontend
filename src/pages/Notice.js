import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_notice.png';
import TopArea from '../components/notice/TopArea';
import FilterSelect from '../components/notice/FilterSelect';
import useInput from '../utils/useInput';
import NoticeTable from '../components/notice/NoticeTable';
import NoticePostButton from '../components/notice/NoticePostButton';
import Modal from '../components/common/Modal';
import { Close } from '@mui/icons-material';

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
  const open = useInput(true);

  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      <Wrap>
        <TopArea />
        <FilterSelect filter={filter} input={input} />
        <NoticeTable list={dummy} isNotNull={true} />
      </Wrap>
      <NoticePostButton />
      {open.value && <Modal open={open} />}
    </ImgLayout>
  );
};

const Wrap = styled.div``;

const Button = styled.button`
  background-color: #889287;
  padding: 10px;
  width: 160px;
  color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  cursor: pointer;
`;

export default Notice;
