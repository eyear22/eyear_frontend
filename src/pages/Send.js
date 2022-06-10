import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_send.png';
import FilterSelect from '../components/receive/FilterSelect';
import useInput from '../utils/useInput';
import { Pagination } from '@mui/material';
import SendTable from '../components/send/SendTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSendLetters } from '../api/letter';
import TopFilter from '../components/receive/TopFilter';
import MobileTable from '../components/receive/MobileTable';

const LetterList = [
  {
    post_id: 0,
    title: '할머니 보고싶어요.',
    createdAt: '22.02.11',
    from: '김대식',
    check: false,
  },
  {
    post_id: 1,
    title: '손녀 수영이 걸음마 영상.',
    createdAt: '22.02.10',
    from: '박대식',
    check: false,
  },
  {
    post_id: 2,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 3,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 4,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 5,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 6,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 7,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 8,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
];

const Send = () => {
  const dispatch = useDispatch();
  const innerWidth = useInput(window.innerWidth);
  const filter = useInput('from');

  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 보낸 편지 불러오기
  useEffect(() => {
    fetchSendLetters(dispatch, user.user._id, user.flag);
  }, []);

  // 모바일 화면인지 확인
  useEffect(() => {
    const resizeListener = () => {
      innerWidth.onChange(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, [window.innerWidth]);

  // 보낸 편지 리스트
  const letters = useSelector((state) => state.letter.sendLetters);

  // 리스트가 null값인지 확인
  const notNull = letters != null && letters.length != 0;

  return (
    <ImgLayout title="보낸 편지" src={TopImg} width={900}>
      {console.log(letters)}
      {/* <FilterSelect filter={filter} />
      <SendTable list={letters} />
      <Wrap>
        <StyledPagination count={10} shape="rounded" />
      </Wrap> */}
      <TopFilter />
      {innerWidth.value <= 500 ? (
        <MobileTable list={letters} isNotNull={notNull} />
      ) : (
        <>
          <SendTable list={letters} isNotNull={notNull} />
          <Wrap>
            <StyledPagination count={10} shape="rounded" />
          </Wrap>
        </>
      )}
    </ImgLayout>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StyledPagination = styled(Pagination)``;

export default Send;
