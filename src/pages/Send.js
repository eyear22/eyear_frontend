import styled from 'styled-components';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_send.png';
import useInput from '../utils/useInput';
import { Pagination } from '@mui/material';
import SendTable from '../components/send/SendTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSendLetters } from '../api/letter';
import TopFilter from '../components/receive/TopFilter';
import MobileTable from '../components/receive/MobileTable';

const Send = () => {
  const dispatch = useDispatch();
  const innerWidth = useInput(window.innerWidth);
  const filter = useInput('from');
  const searchInput = useInput('');

  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 보낸 편지 불러오기
  useEffect(() => {
    user.flag == 0
      ? fetchSendLetters(dispatch, user.flag, '')
      : fetchSendLetters(dispatch, user.flag, searchInput.value);
  }, []);

  // 보낸 편지 검색
  const sendSearch = () => {
    fetchSendLetters(dispatch, user.flag, searchInput.value);
  };

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
      <TopFilter filter={filter} input={searchInput} onClick={sendSearch} />
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
