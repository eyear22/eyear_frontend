import styled from 'styled-components';
import Layout from '../components/common/Layout';
import ContentInput from '../components/post/ContentInput';
import FileInput from '../components/post/FileInput';
import ReceiverInput from '../components/post/ReceiverInput';
import PostButton from '../components/post/PostButton';
import TitleInput from '../components/post/TitleInput';
import useInput from '../utils/useInput';
import { publicRequest } from '../hooks/requestMethods';

const Post = () => {
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
      <PostButton onClick={onClick} />
    </Layout>
  );
};

export default Post;
