import styled from 'styled-components';
import InputArea from './InputArea';
import Layout from './Layout';
import { mobile } from '../../utils/responsive';
import InfoArea from './InfoArea';

const Contact = () => {
  return (
    <Layout title="문의하기" background="#DCEBF5">
      <Container>
        <InfoArea />
        <InputArea />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
  ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`;

export default Contact;
