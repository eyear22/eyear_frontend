import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Introduce from '../components/home/Introduce';
import Layout from '../components/home/Layout';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Introduce />
      <Layout title="문의하기" background="#DCEBF5">
        <div>Home</div>
      </Layout>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
`;

export default Home;
