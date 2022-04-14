import { DeleteRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FileInput = ({ fileArray, setFileArray }) => {
  const [nameList, setNameList] = useState([]); // 선택한 파일 리스트

  const handleFile = (e) => {
    setFileArray(e.target.files);
  };

  const resetFile = () => {
    setFileArray([]);
  };

  useEffect(() => {
    setNameList(fileArray);
  }, [fileArray]);

  return (
    <Container>
      <Title>파일 첨부</Title>
      <Label htmlFor="file">파일찾기</Label>
      <Input id="file" name="files" type="file" accept="image/*, video/*" multiple onChange={handleFile} />
      <ListBox>
        {nameList &&
          Object.values(nameList).map((t) => (
            <text key={t.name}>
              {t.name}
              <br />
            </text>
          ))}
      </ListBox>
      <DeleteBtn>
        <DeleteRounded style={{ color: '#252525', width: 16 }} />
        <DeleteText onClick={resetFile}>삭제하기</DeleteText>
      </DeleteBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const Title = styled.text`
  color: #252525;
  font-size: 20px;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  padding: 10px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 14px;
  color: #252525;
  background-color: #fff;
  cursor: pointer;
  margin: 5px 0;
`;

const ListBox = styled.div`
  display: flex;
  min-height: 40px;
  padding: 10px;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #fff;
`;

const DeleteBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DeleteText = styled.text`
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export default FileInput;
