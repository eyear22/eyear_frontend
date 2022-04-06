import styled from 'styled-components';

const ToggleMenu = ({ toggle }) => {
  return (
    <Container toggle={toggle}>
      <MenuItem>소개</MenuItem>
      <MenuItem>받은편지</MenuItem>
      <MenuItem>보낸편지</MenuItem>
      <MenuItem>환자관리</MenuItem>
      <MenuItem>공지사항</MenuItem>
      <MenuItem>로그인</MenuItem>
      <MenuItem>편지쓰기</MenuItem>
      <MenuItem>비디오</MenuItem>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100vw;
  background-color: white;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    display: ${(props) => (props.toggle ? 'block' : 'none')};
  }
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: #3e3e3e;
  cursor: pointer;
  text-align: center;
  padding: 16px;
`;

export default ToggleMenu;
