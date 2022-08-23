import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_notice.png';
import TopArea from '../components/notice/TopArea';
import FilterSelect from '../components/notice/FilterSelect';
import useInput from '../utils/useInput';
import NoticeTable from '../components/notice/NoticeTable';
import NoticePostButton from '../components/notice/NoticePostButton';
import Modal from '../components/common/Modal';
import AddNoticeModal from '../components/notice/AddNoticeModal';
import { fetchNotice } from '../api/notice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Notice = () => {
  const input = useInput('');
  const filter = useInput('from');
  const open = useInput(false);
  const dispatch = useDispatch();

  const openAddNotice = () => open.onChange(true);

  // 공지사항 불러오기
  useEffect(() => {
    fetchNotice(dispatch);
  }, []);

  // 공지사항 리스트
  const notices = useSelector((state) => state.notice.notices);

  return (
    <ImgLayout title="공지사항" src={TopImg} width={900}>
      <Wrap>
        <TopArea />
        <FilterSelect filter={filter} input={input} />
        <NoticeTable list={notices} isNotNull={true} />
      </Wrap>
      <NoticePostButton onClick={openAddNotice} />
      {open.value && <AddNoticeModal open={open} />}
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
