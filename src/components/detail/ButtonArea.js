import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import { useGoBack, useGoPost } from '../../hooks/navigateHooks';

const ButtonArea = () => {
  return (
    <Container>
      <ListButton onClick={useGoBack()}>목록</ListButton>
      <SendButton onClick={useGoPost()}>답장하기</SendButton>
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

const ListButton = styled.button`
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
