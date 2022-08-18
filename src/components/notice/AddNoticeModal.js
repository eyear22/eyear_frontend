import styled from 'styled-components';
import Modal from '../common/Modal';

const AddNoticeModal = ({ open }) => {
  return (
    <Modal open={open}>
      <Container>
        <Wrap>
          <Title>제목</Title>
          <Input />
        </Wrap>
        <Wrap>
          <Title>제목</Title>
          <Input />
        </Wrap>
      </Container>
    </Modal>
  );
};

const Container = styled.div``;

const Wrap = styled.div`
  width: 100%;
  text-align: left;
`;

const Title = styled.div`
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

export default AddNoticeModal;
