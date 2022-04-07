import axios, { Axios } from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const Video = () => {
  const [fileArray, setFileArray] = useState([]);

  const uploadFile = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    axios({
      method: 'post',
      url: `http://localhost:5000/api/video/uploadfiles`,
      headers: config,
      data: { formData },
    })
      .then((res) => {
        console.log(res);
        if (res.data == 'success') {
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
      <form method="post" encType="multipart/form-data">
        <Input type="file" accept="image/*, video/*" multiple onChange={uploadFile} />
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
