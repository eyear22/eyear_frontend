import styled from 'styled-components';
import Logo from '../../assets/logo_header.png';

const Header = () => {
  return (
    <Container>
      <Image src={Logo} />
      <Button>편지쓰기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Image = styled.img`
  height: 30px;
  width: 70px;
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
export default Header;
