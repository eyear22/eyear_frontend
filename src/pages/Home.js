import styled from 'styled-components';
import Banner from '../components/home/Banner';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Layout from '../components/home/Layout';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Layout title="아이어 소개">
        <div>Home</div>
      </Layout>
      <Layout title="문의하기">
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
