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

const Post = () => {
  const title = useInput('');
  const receiver = useInput(0);
  const file = useInput([]);
  const content = useInput('');

  const onClick = async () => {
    let formData = new FormData();
    formData.append('many', file);
    formData.append('title', title.value);
    formData.append('content', content.value);
    formData.append('pat_id', 0);
    formData.append('receiver', '아이어');

    // post
    axios({
      method: 'post',
      url: 'http://localhost:5000/business/post',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    })
      .then((res) => {
        console.log(res);
        if (res.data == 'ok') {
          console.log('성공');
        } else {
          alert('비디오 업로드 실패');
        }
      })
      .catch((err) => {
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
          <ReceiverInput />
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

const FileArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ListBox = styled.div`
  width: 80%;
  font-size: 18px;
  display: flex;
  min-height: 40px;
  padding: 5px 7px;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  background-color: #fff;
`;

const FInput = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  width: 60px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #252525;
  font-size: 14px;
  color: #252525;
  background-color: #fff;
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DeleteText = styled.div`
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export default Post;
