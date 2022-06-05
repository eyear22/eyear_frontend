import styled from 'styled-components';

const TopFilter = () => {
  return (
    <Container>
      <Wrap>
        <Select name="filter">
          <option value="from">작성자</option>
          <option value="title">제목</option>
        </Select>
        <Input />
        <Button>검색</Button>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: #d6d9da;
  padding: 14px 80px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`;

const Select = styled.select`
  height: 100%;
  min-width: 100px;
  border: solid 1px #d9d9d9;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  height: 100%;
  min-width: 500px;
  border: solid 1px #d9d9d9;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 100%;
  width: 100px;
  border: solid 1px #d9d9d9;
  background-color: white;
`;

export default TopFilter;
