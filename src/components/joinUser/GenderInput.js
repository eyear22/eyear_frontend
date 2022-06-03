import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import InputLayout from './InputLayout';

const GenderInput = ({ sex }) => {
  return (
    <InputLayout title="성별">
      <SelectArea>
        <SelectDiv active={!sex.value} onClick={() => sex.onChange(0)}>
          남자
        </SelectDiv>
        <SelectDiv active={sex.value} onClick={() => sex.onChange(1)}>
          여자
        </SelectDiv>
      </SelectArea>
    </InputLayout>
  );
};

const SelectArea = styled.div`
  display: flex;
  width: 330px;
  border: 1px solid #d7d7d7;
  height: 32px;
  ${mobile({ width: 260 })}
`;

const SelectDiv = styled.div`
  display: flex;
  width: 165px;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#889287' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#black')};
  font-size: 14px;
  ${mobile({ width: 130 })}
`;

export default GenderInput;
