import { DeleteRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FileInput = ({ file }) => {
  const [nameList, setNameList] = useState([]); // 선택한 파일 리스트

  const handleFile = (e) => {
    let files = e.target.files;
    const count = [...files].filter((s) => s.type.includes('video')).length;
    count <= 1 ? file.onChange(files) : alert('동영상은 1개만 첨부 가능합니다.');
  };

  const resetFile = () => {
    file.onChange([]);
  };

  useEffect(() => {
    setNameList(file.value);
  }, [file.value]);

  return (
    <Container>
      <ListBox>
        {nameList &&
          Object.values(nameList).map((t) => (
            <div key={t.name}>
              {t.name}
              <br />
            </div>
          ))}
      </ListBox>
      <Right>
        <Label htmlFor="file">파일찾기</Label>
        <Input id="file" name="files" type="file" accept="image/*, video/*" multiple onChange={handleFile} />
        <DeleteBtn>
          <DeleteRounded style={{ color: '#252525', width: 16 }} />
          <DeleteText onClick={resetFile}>삭제하기</DeleteText>
        </DeleteBtn>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
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

const ListBox = styled.div`
  width: 80%;
  display: flex;
  min-height: 40px;
  padding: 5px 7px;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  background-color: #fff;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
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
