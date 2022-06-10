import styled from 'styled-components';
import Layout from '../components/common/Layout';
import PostButton from '../components/post/PostButton';
import useInput from '../utils/useInput';
import ItemLayout from '../components/post/ItemLayout';
import ContentInput from '../components/post/ContentInput';
import TitleInput from '../components/post/TitleInput';
import ReceiverInput from '../components/post/ReceiverInput';
import FileInput from '../components/post/FileInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = () => {
  const navigate = useNavigate();

  const title = useInput('');
  const pat_id = useInput([]);
  const receiver = useInput([]);
  const file = useInput([]);
  const content = useInput('');

  // 현재 사용자
  const user = useSelector((state) => state.user.currentUser);

  // 편지 보내기 버튼 클릭
  const onClick = async () => {
    const from = user.flag == 0 ? user.user._id : pat_id.value.id;
    const to = user.flag == 0 ? pat_id.value.id : receiver.value.id;

    let formData = new FormData();
    for (let i = 0; i < file.value.length; i++) {
      formData.append('many', file.value[i]);
    }
    formData.append('title', title.value);
    formData.append('content', content.value);
    formData.append('from', from); // from: 기관,  to: 개인
    formData.append('to', to);
    formData.append('flag', user.flag);

    axios({
      method: 'post',
      url: `http://localhost:5000/post`,
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
