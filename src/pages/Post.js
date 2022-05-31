import styled from 'styled-components';
import Layout from '../components/common/Layout';
import PostButton from '../components/post/PostButton';
import useInput from '../utils/useInput';
import { publicRequest } from '../hooks/requestMethods';
import ItemLayout from '../components/post/ItemLayout';
import ContentInput from '../components/post/ContentInput';
import TitleInput from '../components/post/TitleInput';
import ReceiverInput from '../components/post/ReceiverInput';
import FileInput from '../components/post/FileInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();

  const title = useInput('');
  const pat_id = useInput([]);
  const receiver = useInput([]);
  const file = useInput([]);
  const content = useInput('');

  // 편지 보내기 버튼 클릭
  const onClick = async () => {
    let formData = new FormData();
    for (let i = 0; i < file.value.length; i++) {
      formData.append('many', file.value[i]);
    }
    formData.append('title', title.value);
    formData.append('content', content.value);
    formData.append('pat_id', pat_id.value.id);
    formData.append('receiver', receiver.value.name);

    axios({
      method: 'post',
      url: 'http://localhost:5000/business/post',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    })
      .then((res) => {
        if (res.data == 'ok') {
          console.log('성공');
          navigate('/post/success', { replace: true });
        }
      })
      .catch((err) => {
        alert('편지 전송에 실패하였습니다.');
        console.log('실패');
      });
  };

  return (
    <Layout title="편지 쓰기">
      <Wrap>
        <ItemLayout title="제목" center>
          <TitleInput title={title} />
        </ItemLayout>
        <ItemLayout title="받는 사람">
          <ReceiverInput pat_id={pat_id} receiver={receiver} />
        </ItemLayout>
        <ItemLayout title="첨부 파일">
          <FileInput file={file} />
        </ItemLayout>
        <ItemLayout title="내용">
          <ContentInput content={content} />
        </ItemLayout>
      </Wrap>
      <PostButton onClick={onClick} />
    </Layout>
  );
};

const Wrap = styled.div`
  margin-top: 40px;
`;

export default Post;
