import useInput from '../utils/useInput';
import { Pagination } from '@mui/material';
import { useEffect } from 'react';
import styled from 'styled-components';
import FilterSelect from '../components/receive/FilterSelect';
import ReceiveTable from '../components/receive/ReceiveTable';
import MobileTable from '../components/receive/MobileTable';
import ImgLayout from '../components/common/ImgLayout';
import TopImg from '../assets/img_receive.png';
import TopFilter from '../components/receive/TopFilter';
import EmptyTable from '../components/receive/EmptyTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceiveLetters } from '../api/letter';

const Receive = () => {
  const _id = '629a28786fd0827ba894f3f8';
  const innerWidth = useInput(window.innerWidth);
  const filter = useInput('name');
  const dispatch = useDispatch();
  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 받은 편지 불러오기
  useEffect(() => {
    fetchReceiveLetters(dispatch, user.user._id, user.flag);
  }, []);

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

  /*
  // TODO:
  // FIXME:
  1. 작성자 오브젝트 아이디로 넘어옴
  2. 작성일 T까지 다 넘어옴
  3. 작성일 기준으로 정렬해서 데이터 보내기
  */

  // 모바일페이지의 테이블 분리
  return (
    <ImgLayout title="받은 편지" src={TopImg} width={900}>
      <TopFilter />
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
