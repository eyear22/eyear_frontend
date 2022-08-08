import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo_header.png';
import { Menu } from '@mui/icons-material';
import { tablet } from '../../utils/responsive';
import ToggleMenu from './ToggleMenu';
import { useNavigate } from 'react-router-dom';
import { useGoHome, useGoNotice, useGoPost, useGoReceive, useGoSend } from '../../hooks/navigateHooks';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../api/auth';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.user.currentUser);

  const goIntroduceSection = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 100);
  };

  const goManagePatient = () => {
    navigate('/managePatients');
  };

  // 로그인/로그아웃 버튼
  // const LoginLogoutClick = () => {
  //   user ? logout(dispatch) : navigate('/login');
  // };

  const LoginClick = () => {
    navigate('/login');
  };

  const LogoutClick = () => {
    logout(dispatch);
  };

  return (
    <Container>
      <Wrap onClick={() => setToggle(false)}>
        <Image src={Logo} onClick={useGoHome()} />
        <Center toggle={toggle}>
          <MenuItem onClick={goIntroduceSection}>소개</MenuItem>
          <MenuItem onClick={useGoReceive()}>받은편지</MenuItem>
          <MenuItem onClick={useGoSend()}>보낸편지</MenuItem>
          {user && user.flag == 1 && <MenuItem onClick={goManagePatient}>환자관리</MenuItem>}
          <MenuItem onClick={useGoNotice()}>공지사항</MenuItem>
        </Center>
      </Wrap>
      <Right toggle={toggle}>
        <AuthText onClick={() => LogoutClick()}>로그아웃</AuthText>
        <AuthText onClick={() => LoginClick()}>로그인</AuthText>
        {/* <AuthText onClick={() => LoginLogoutClick()}>{user ? '로그아웃' : '로그인'}</AuthText> */}
        <Button onClick={useGoPost()}>편지쓰기</Button>
      </Right>
      <Hamburger onClick={() => setToggle(!toggle)}>
        <Menu sx={{ fontSize: 30 }} />
      </Hamburger>
      <ToggleMenu toggle={toggle} setToggle={setToggle} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fff;
  z-index: 100;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 30px;
  width: 70px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  margin-left: 120px;
  ${tablet({ display: 'none' })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: #ba2b0c;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  ${tablet({ display: 'none' })}
`;

const AuthText = styled.div`
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: #ba2b0c;
  }
`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 6px;
  background-color: #ba2b0c;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  right: 20px;
  ${tablet({ display: 'block' })}
`;

export default Header;
