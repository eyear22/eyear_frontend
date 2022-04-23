import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SmallMenu = () => {
  return (
    <Container>
      <Text>
        <StyledLink to="/">아이디 찾기</StyledLink>
      </Text>
      <Text>|</Text>
      <Text>
        <StyledLink to="/">비밀번호 찾기</StyledLink>
      </Text>
      <Text>|</Text>
      <Text>
        <StyledLink to="/">비밀번호 변경</StyledLink>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin-bottom: 28px;
`;

const Text = styled.text`
  font-size: 12px;
  padding: 0 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default SmallMenu;
