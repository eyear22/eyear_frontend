import useInput from '../utils/useInput';
import { Pagination } from '@mui/material';
import { useEffect } from 'react';
import styled from 'styled-components';
import ReceiveTable from '../components/receive/ReceiveTable';
import MobileTable from '../components/receive/MobileTable';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_receive.png';
import TopFilter from '../components/receive/TopFilter';
import EmptyTable from '../components/common/EmptyTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceiveLetters } from '../api/letter';

const Receive = () => {
  const innerWidth = useInput(window.innerWidth);
  const filter = useInput('name');
  const searchInput = useInput('');
  const dispatch = useDispatch();
  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 받은 편지 불러오기
  useEffect(() => {
    user.flag == 0 ? fetchReceiveLetters(dispatch, user.flag, '') : fetchReceiveLetters(dispatch, user.flag, ' ');
  }, []);

  // 받은 편지 검색
  const receiveSearch = () => {
    fetchReceiveLetters(dispatch, user.flag, searchInput.value);
  };

  // 모바일 화면인지 확인
  useEffect(() => {
    const resizeListener = () => {
      innerWidth.onChange(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, [window.innerWidth]);

  // 받은 편지 리스트
  const letters = useSelector((state) => state.letter.receiveLetters);

  // 리스트가 null값인지 확인
  const notNull = letters != null && letters.length != 0;

  // 모바일페이지의 테이블 분리
  return (
    <ImgLayout title="받은 편지" src={TopImg} width={'900px'}>
      <TopFilter filter={filter} input={searchInput} onClick={receiveSearch} />
      {innerWidth.value <= 500 ? (
        <MobileTable list={letters} isNotNull={notNull} />
      ) : (
        <>
          <ReceiveTable list={letters} isNotNull={notNull} />
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

const StyledPagination = styled(Pagination)`
  /* & .Muipaginationitem-root {
  }
  & .MuiPagination-text {
    color: blue;
  }
  & .MuiPagination-outlined {
    color: blue;
  } */
`;

export default Receive;
