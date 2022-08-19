import styled from 'styled-components';
import Modal from '../common/Modal';

const AddNoticeModal = ({ open }) => {
  return (
    <Modal open={open}>
      <Container>
        <Wrap>
          <Title>제목</Title>
          <InputArea>
            <Input />
          </InputArea>
        </Wrap>
        <Wrap>
          <Title>내용</Title>
          <InputArea>
            <LongInput />
          </InputArea>
        </Wrap>
        <ButtonArea>
          <Button>작성하기</Button>
        </ButtonArea>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 12%;
  text-align: center;
`;

const InputArea = styled.div`
  display: flex;
  width: 90%;
`;

const Input = styled.input`
  width: 100%;
`;

const LongInput = styled.textarea`
  width: 100%;
  height: 260px;
`;

const Button = styled.button`
  background-color: #889287;
  padding: 8px;
  width: 100px;
  color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  cursor: pointer;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default AddNoticeModal;
