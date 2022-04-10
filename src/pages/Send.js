import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Input from '../components/send/Input';
import TitleInput from '../components/send/TitleInput';

const Send = () => {
  return (
    <Layout title="편지 쓰기">
      <TitleInput />
      <Input />
    </Layout>
  );
};

export default Send;
