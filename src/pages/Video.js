import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const Video = () => {
  const [fileArray, setFileArray] = useState([]);

  const handleFile = (e) => {
    setFileArray(e.target.files);
    console.log(e.target.files);
  };

  const uploadFile = () => {
    let formData = new FormData();

    // for문 말고 다른 방법 생각해보기
    for (let i = 0; i < fileArray.length; i++) {
      formData.append('file', fileArray[i]);
    }

    formData.append('name', 'hi');
    axios({
      method: 'post',
      url: `http://localhost:5000/upload`,
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

  const onSubmit = (e) => {
    e.preventDefault();
    uploadFile();
  };

  return (
    <Container>
      <Title>비디오 업로드</Title>
      <form action="/upload" method="post" encType="multipart/form-data" onSubmit={onSubmit}>
        <Input name="files" type="file" accept="image/*, video/*" multiple onChange={handleFile} />
        <button type="submit">업로드</button>
      </form>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1``;

const Input = styled.input`
  padding: 10px;
`;

export default Video;
