import styled from 'styled-components';
import Layout from '../components/common/Layout';
import ContentInput from '../components/send/ContentInput';
import FileInput from '../components/send/FileInput';
import ReceiverInput from '../components/send/ReceiverInput';
import SendButton from '../components/send/SendButton';
import TitleInput from '../components/send/TitleInput';
import useInput from '../utils/useInput';
import { publicRequest } from '../hooks/requestMethods';

const Send = () => {
  const title = useInput('');
  const receiver = useInput(0);
  const file = useInput([]);
  const content = useInput('');

  const onClick = async () => {
    // try {
    //   const res = await publicRequest.post('/post', {
    //     title: title.value,
    //     content: content.value,
    //     from: '보내는사람',
    //     to: receiver.value,
    //     check: false,
    //   });
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
    console.log('title', title.value);
    console.log('receiver', receiver.value);
    console.log('file', file.value);
    console.log('content', content.value);
  };

  return (
    <Layout title="편지 쓰기">
      <TitleInput title={title} />
      <ReceiverInput />
      <FileInput file={file} />
      <ContentInput content={content} />
      <SendButton onClick={onClick} />
    </Layout>
  );
};

export default Send;
