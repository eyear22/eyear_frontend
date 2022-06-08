import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const TopFilter = () => {
  return (
    <Container>
      <Wrap>
        <Select name="filter">
          <option value="from">환자이름</option>
          <option value="title">환자번호</option>
        </Select>
        <Input />
        <Button>검색</Button>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 14px 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  ${mobile({ marginTop: 0, marginBottom: 20, padding: 0 })}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
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
  ${mobile({ minWidth: 70 })}
`;

const Input = styled.input`
  height: 100%;
  min-width: 460px;
  border: solid 1px #d9d9d9;
  &:focus {
    outline: none;
  }
  margin: 0px 14px;
  ${mobile({ minWidth: 100 })}
`;

const Button = styled.button`
  color: #fff;
  height: 100%;
  width: 100px;
  border: solid 1px #3b3b3b;
  background-color: #3b3b3b;
  cursor: pointer;
`;

export default TopFilter;