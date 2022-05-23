import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Introduce from '../components/home/Introduce';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Introduce />
      <Contact />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
`;

export default Home;
