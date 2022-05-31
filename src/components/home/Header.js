import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo_header.png';
import { Menu } from '@mui/icons-material';
import { tablet } from '../../utils/responsive';
import ToggleMenu from './ToggleMenu';
import { useNavigate } from 'react-router-dom';
import { useGoHome, useGoLogin, useGoPost, useGoReceive, useGoSend } from '../../hooks/navigateHooks';

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const goIntroduceSection = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 100);
  };

  return (
    <Container>
      <Wrap>
        <Image src={Logo} onClick={useGoHome()} />
        <Center toggle={toggle}>
          <MenuItem onClick={goIntroduceSection}>소개</MenuItem>
          <MenuItem onClick={useGoReceive()}>받은편지</MenuItem>
          <MenuItem onClick={useGoSend()}>보낸편지</MenuItem>
          <MenuItem>환자관리</MenuItem>
          <MenuItem>공지사항</MenuItem>
        </Center>
      </Wrap>
      <Right toggle={toggle}>
        <AuthText onClick={useGoLogin()}>로그인</AuthText>
        <Button onClick={useGoPost()}>편지쓰기</Button>
      </Right>
      <Hamburger onClick={() => setToggle(!toggle)}>
        <Menu sx={{ fontSize: 30 }} />
      </Hamburger>
      <ToggleMenu toggle={toggle} />
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
