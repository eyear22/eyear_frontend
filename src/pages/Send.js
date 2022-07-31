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
  const patientNum = useInput('');

  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 보낸 편지 불러오기
  useEffect(() => {
    const id = user.flag == 0 ? user.user._id : '62942b42f6d27bfec6359adc';
    fetchSendLetters(dispatch, 0);
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
      <TopFilter />
      {console.log(letters)}
      {innerWidth.value <= 500 ? (
        <MobileTable list={letters} isNotNull={notNull} />
      ) : (
        <Section visible={patientNum.value != ''}>
          <SendTable list={letters} isNotNull={notNull} />
          <Wrap>
            <StyledPagination count={10} shape="rounded" />
          </Wrap>
        </Section>
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

const Section = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: aliceblue;
`;

export default Send;
