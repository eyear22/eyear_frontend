import styled from 'styled-components';

const ContentInput = ({ content }) => {
  const onChange = (e) => {
    content.onChange(e.target.value);
  };

  return (
    <Container>
      <Title>내용</Title>
      <TextArea placeholder="내용을 입력해주세요." onChange={onChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #252525;
  font-size: 20px;
  margin-bottom: 6px;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  font-size: 18px;
  min-height: 400px;
  border: 1px solid #d9d9d9;
  padding: 7px;
  border-radius: 5px;
  line-height: 160%;
  resize: none;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
`;

export default ContentInput;
