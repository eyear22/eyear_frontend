import { DeleteRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FileInput = ({ file }) => {
  const [nameList, setNameList] = useState([]); // 선택한 파일 리스트

  const handleFile = (e) => {
    file.onChange(e.target.files);
  };

  const resetFile = () => {
    file.onChange([]);
  };

  useEffect(() => {
    setNameList(file.value);
  }, [file.value]);

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
  margin-bottom: 30px;
`;

const Title = styled.div`
  color: #252525;
  font-size: 20px;
  margin-bottom: 6px;
  font-weight: bold;
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
  margin-bottom: 5px;
`;

const ListBox = styled.div`
  font-size: 18px;
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

const DeleteText = styled.div`
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export default FileInput;
