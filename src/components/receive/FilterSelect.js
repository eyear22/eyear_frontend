import styled from 'styled-components';
import SearchIcon from '../../assets/icon_search.png';
import useInput from '../../utils/useInput';

const FilterSelect = ({ filter }) => {
  const input = useInput('');

  // input 변경
  const onChange = (e) => {
    input.onChange(e.target.value);
  };

  // 필터 변경
  const handleChange = (e) => {
    filter.onChange(e.target.value);
  };

  // 검색 버튼 클릭시
  const search = () => {
    console.log(filter.value);
    console.log(input.value);
  };

  return (
    <Container>
      <Select name="filter" onChange={handleChange}>
        <option value="from">작성자</option>
        <option value="title">제목</option>
      </Select>
      <InputArea>
        <Input onChange={onChange} />
        <Icon src={SearchIcon} onClick={search} />
      </InputArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0;
`;

const Select = styled.select`
  height: 30px;
  min-width: 60px;
  margin-right: 10px;
  border-radius: 2px;
  border: solid 1px #d9d9d9;
  &:focus {
    outline: none;
  }
`;

const InputArea = styled.div`
  width: 120px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #d9d9d9;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
`;

const Input = styled.input`
  width: 110px;
  border: none;
  -webkit-appearance: none;
  text-align: left;
  margin-left: 5px;
  overflow: auto;
  z-index: -1;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  margin: 0 5px;
  width: 15px;
  cursor: pointer;
`;

export default FilterSelect;
