import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const InputArea = () => {
  return (
    <Container>
      <Wrap>
        <Input placeholder="회신받을 이메일을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Input placeholder="제목을 입력해주세요." />
      </Wrap>
      <Wrap>
        <TextArea placeholder="내용을 입력해주세요." />
      </Wrap>
      <ButtonWrap>
        <Button>보내기</Button>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: flex-end;
  ${mobile({ width: '80vw' })}
`;

const Wrap = styled.div`
  display: flex;
  background-color: #fff;
  padding: 5px 7px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 26px;
  border: none;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: none;
  line-height: 160%;
  resize: none;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #626a61;
  padding: 10px;
  width: 140px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default InputArea;
