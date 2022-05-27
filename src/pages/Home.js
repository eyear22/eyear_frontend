import { useRef } from 'react';
import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
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

  return (
    <Container>
      <Header goIntroduce={goIntroduce} />
      <Banner goContact={onContact} />
      <div ref={introduceRef} />
      <Introduce />
      <div ref={contactRef} />
      <Contact />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
`;

export default Home;
