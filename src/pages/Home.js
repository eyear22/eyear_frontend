import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <div style={{ backgroundColor: '#f5f5f5', height: '100vh' }}>Home</div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
`;

export default Home;
