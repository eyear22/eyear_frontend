import styled from 'styled-components';

const TitleInput = ({ title }) => {
  const onChange = (e) => {
    title.onChange(e.target.value);
  };

  return (
    <Container>
      <Title>제목</Title>
      <Input placeholder="제목을 입력해주세요." onChange={onChange} />
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
  font-size: 18px;
  height: 28px;
  border: 1px solid #d9d9d9;
  padding: 7px;
  border-radius: 5px;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
`;

export default TitleInput;
