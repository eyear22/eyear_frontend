import styled from 'styled-components';
import Src from '../../assets/icon_check.png';

const FilterSelect = ({ filter }) => {
  const handleChange = (e) => {
    console.log(filter);
    filter.onChange(e.target.value);
  };

  return (
    <Container>
      <Select name="filter" onChange={handleChange}>
        <option value="from">작성자</option>
        <option value="title">제목</option>
      </Select>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
  background-color: aliceblue;
`;

const Select = styled.select`
  height: 30px;
  min-width: 80px;
`;

const Input = styled.input`
  height: 24px;
`;

export default FilterSelect;
