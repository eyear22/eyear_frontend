import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import useInput from '../../utils/useInput';

// 개인 select 메뉴
const userSelect = [
  {
    key: 0,
    value: 'name',
    text: '작성자',
  },
];

// 기관 select 메뉴
const businessSelect = [
  {
    key: 0,
    value: 'name',
    text: '환자이름',
  },
];

const TopFilter = ({ filter, input }) => {
  // select 배열 개인/기업에 따라 다르게 지정
  const options = useInput([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    user.flag == 0 ? options.onChange(userSelect) : options.onChange(businessSelect);
  }, []);

  const handleFilter = (e) => {
    filter.onChange(e.target.value);
  };

  const handlefilterInput = (e) => {
    input.onChange(e.target.value);
  };

  const searchClick = () => {
    console.log(filter.value);
    console.log(input.value);
  };

  return (
    <Container>
      <Wrap>
        <Select name="filter" onChange={handleFilter}>
          {options.value.map(({ key, value, text }) => (
            <option key={key} value={value}>
              {text}
            </option>
          ))}
        </Select>
        <Input value={handleFilter.value} onChange={handlefilterInput} />
        <Button onClick={searchClick}>검색</Button>
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
