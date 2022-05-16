import styled from 'styled-components';

const ContentInput = ({ content }) => {
  const onChange = (e) => {
    content.onChange(e.target.value);
  };

  return (
    <Container>
      <TextArea onChange={onChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  padding: 5px 7px;
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  min-height: 400px;
  border: none;
  -webkit-appearance: none;
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

export default ContentInput;
