import styled from 'styled-components';

const TitleInput = ({ title }) => {
  const onChange = (e) => {
    title.onChange(e.target.value);
  };

  return (
    <Container>
      <Input onChange={onChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  padding: 5px 7px;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  -webkit-appearance: none;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
`;

export default TitleInput;
