import { Close } from '@mui/icons-material';
import styled from 'styled-components';

const Modal = ({ open, children, title, desc }) => {
  const close = () => {
    open.onChange(false);
  };
  return (
    <Container>
      <Wrap>
        <CloseButton id="modalCloseBtn" onClick={close} />
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Content>{children}</Content>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Wrap = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const CloseButton = styled(Close)`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const Desc = styled.h1`
  margin-top: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #404a5c;
`;

const Content = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default Modal;
