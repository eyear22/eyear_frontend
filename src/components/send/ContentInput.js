import styled from 'styled-components';

const ContentInput = () => {
  return (
    <Container>
      <Title>내용</Title>
      <Input placeholder="내용을 입력해주세요." />
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
  min-height: 400px;
  border: 1px solid #d9d9d9;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
`;

export default ContentInput;
