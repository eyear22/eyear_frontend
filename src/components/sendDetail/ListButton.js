import styled from 'styled-components';
import { useGoSend } from '../../hooks/navigateHooks';
import { mobile } from '../../utils/responsive';

const ListButton = () => {
  return (
    <Container>
      <Button onClick={useGoSend()}>목록</Button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center' })}
`;

const Button = styled.button`
  border: none;
  color: #889287;
  background-color: #fff;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  padding: 8px;
  border-radius: 6px;
  width: 120px;
  margin-right: 18px;
  cursor: pointer;
`;

export default ListButton;
