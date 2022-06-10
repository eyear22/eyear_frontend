import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useGoNotice, useGoPost, useGoReceive, useGoSend } from '../../hooks/navigateHooks';
import { logout } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const ToggleMenu = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  // 로그인/로그아웃 버튼
  const LoginLogoutClick = () => {
    user ? logout(dispatch) : navigate('/login');
  };

  return (
    <Container toggle={toggle} onClick={() => setToggle(false)}>
      <MenuItem onClick={useGoReceive()}>받은편지</MenuItem>
      <MenuItem onClick={useGoSend()}>보낸편지</MenuItem>
      {/* <MenuItem>환자관리</MenuItem> */}
      <MenuItem onClick={useGoNotice()}>공지사항</MenuItem>
      <MenuItem onClick={LoginLogoutClick}>{user ? '로그아웃' : '로그인'}</MenuItem>
      <MenuItem onClick={useGoPost()}>편지쓰기</MenuItem>
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
  &:hover {
    color: #ba2b0c;
  }
`;

export default ToggleMenu;
