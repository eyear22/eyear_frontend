import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const ButtonArea = () => {
  return (
    <Container>
      <ListButton>목록</ListButton>
      <SendButton>답장하기</SendButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center' })}
`;

const ListButton = styled.button`
  border: none;
  color: #889287;
  background-color: #fff;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  padding: 8px;
  border-radius: 6px;
  width: 120px;
  margin-right: 10px;
  cursor: pointer;
`;

const SendButton = styled.button`
  border: none;
  color: #fff;
  background-color: #889287;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  padding: 8px;
  border-radius: 6px;
  width: 120px;
  cursor: pointer;
`;

export default ButtonArea;