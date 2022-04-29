import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const SelectBox = () => {
  return <Container>SelectBox</Container>;
};

const Container = styled.div`
  border: 1px solid #889287;
  align-items: center;
  width: 500px;
  height: 160px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  ${mobile({ width: 280 })}
  &:hover {
    width: 502px;
    height: 162px;
    ${mobile({ width: 282 })}
  }
`;

export default SelectBox;
