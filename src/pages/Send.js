import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import ContentInput from '../components/send/ContentInput';
import FileInput from '../components/send/FileInput';
import ReceiverInput from '../components/send/ReceiverInput';
import TitleInput from '../components/send/TitleInput';

const Send = () => {
  const [fileArray, setFileArray] = useState([]);
  return (
    <Layout title="편지 쓰기">
      <TitleInput />
      <ReceiverInput />
      <FileInput fileArray={fileArray} setFileArray={setFileArray} />
      <ContentInput />
    </Layout>
  );
};

export default Send;
