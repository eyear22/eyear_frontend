import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPatients } from '../api/patient';
import Banner from '../components/home/Banner';
import Contact from '../components/home/Contact';
import Header from '../components/home/Header';
import Introduce from '../components/home/Introduce';

const Home = () => {
  const introduceRef = useRef(null);
  const contactRef = useRef(null);

  const goIntroduce = () => {
    introduceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const onContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const dispatch = useDispatch();

  // 병원 고유 번호 (임의값)
  const hos_id = '000000000000000000000000';

  // 환자 데이터 불러오기
  useEffect(() => {
    fetchPatients(dispatch, hos_id);
  }, []);

  return (
    <Container>
      <Header goIntroduce={goIntroduce} />
      <Banner goContact={onContact} />
      <div ref={introduceRef} />
      <Introduce />
      <div ref={contactRef} />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
`;

export default Home;
