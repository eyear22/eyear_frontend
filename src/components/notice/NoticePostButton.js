import styled from 'styled-components';

const NoticePostButton = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Button type="submit">작성하기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #889287;
  padding: 10px;
  width: 160px;
  color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 2px #dfdfdf;
  cursor: pointer;
`;

export default NoticePostButton;
