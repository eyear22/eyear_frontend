import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo_header.png';
import { Menu } from '@mui/icons-material';
import { tablet } from '../../utils/responsive';
import ToggleMenu from './ToggleMenu';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Wrap>
        <Image src={Logo} />
        <Center toggle={toggle}>
          <MenuItem>소개</MenuItem>
          <MenuItem>받은편지</MenuItem>
          <MenuItem>보낸편지</MenuItem>
          <MenuItem>환자관리</MenuItem>
          <MenuItem>공지사항</MenuItem>
          <MenuItem>비디오</MenuItem>
        </Center>
      </Wrap>
      <Right toggle={toggle}>
        <AuthText>로그인</AuthText>
        <Button>편지쓰기</Button>
      </Right>
      <Hamburger onClick={() => setToggle(!toggle)}>
        <Menu sx={{ fontSize: 30 }} />
      </Hamburger>
      <ToggleMenu toggle={toggle} />
    </Container>
  );
};

const Container = styled.div`
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
`;

const Center = styled.div`
  display: flex;
  margin-left: 120px;
  ${tablet({ display: 'none' })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: #3e3e3e;
  cursor: pointer;
  margin-right: 20px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  ${tablet({ display: 'none' })}
`;

const AuthText = styled.text`
  font-size: 16px;
  color: #3e3e3e;
  cursor: pointer;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 6px;
  background-color: #ba2b0c;
  border: none;
  color: white;
  font-size: 16px;
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
