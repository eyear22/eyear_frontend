import styled from 'styled-components';

const ContentInput = () => {
  return (
    <Container>
      <Title>내용</Title>
      <TextArea placeholder="내용을 입력해주세요." />
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

const TextArea = styled.textarea`
  min-height: 400px;
  border: 1px solid #d9d9d9;
  margin-top: 5px;
  padding: 7px;
  border-radius: 5px;
  line-height: 160%;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
`;

export default ContentInput;
