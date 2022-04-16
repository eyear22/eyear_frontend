import styled from 'styled-components';
import Layout from '../components/common/Layout';
import ContentInput from '../components/send/ContentInput';
import FileInput from '../components/send/FileInput';
import ReceiverInput from '../components/send/ReceiverInput';
import SendButton from '../components/send/SendButton';
import TitleInput from '../components/send/TitleInput';
import useInput from '../utils/useInput';

const Send = () => {
  const title = useInput('');
  const receiver = useInput(0);
  const file = useInput([]);
  const content = useInput('');

  const onClick = () => {
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
