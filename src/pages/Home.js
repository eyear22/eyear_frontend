import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPatients } from '../api/patient';
import Banner from '../components/home/Banner';
import Contact from '../components/home/Contact';
import Header from '../components/home/Header';
import Introduce from '../components/home/Introduce';

const Home = () => {
  const contactRef = useRef(null);
  const onContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const dispatch = useDispatch();

  // 병원 고유 번호 (임의값)
  const hos_id = '6299ee7d86075cdad418286f';

  // 환자 데이터 불러오기
  useEffect(() => {
    fetchPatients(dispatch, hos_id);
  }, []);

  return (
    <Container>
      <Header />
      <Banner goContact={onContact} />
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
