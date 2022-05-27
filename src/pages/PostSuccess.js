import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Icon from '../assets/icon_email.png';
import { mobile } from '../utils/responsive';
import { Link } from 'react-router-dom';

const PostSuccess = () => {
  return (
    <Layout>
      <Container>
        <Image src={Icon} />
        <Title>편지가 전송되었습니다.</Title>
        <Desc>내가 쓴 편지는 [보낸편지]에서 확인할 수 있습니다.</Desc>
        <Wrap>
          <StyledLink to="/send">보낸편지로 가기</StyledLink>
          <Desc>ㅣ</Desc>
          <StyledLink to="/">홈으로</StyledLink>
        </Wrap>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  color: #6c6c6c;
  font-size: 20px;
  margin-bottom: 10px;
  ${mobile({ fontSize: 16 })}
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6c6c6c;
  font-size: 20px;
  margin-bottom: 10px;
`;

export default PostSuccess;
