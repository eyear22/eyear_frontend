import { useState } from 'react';
import styled from 'styled-components';
import AuthLayout from '../components/common/AuthLayout';
import { mobile } from '../utils/responsive';

const Login = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (idx) => setActiveIndex(idx);
  const tabMenu = [
    {
      title: (
        <TitleContainer>
          <Title key={0} onClick={() => tabClickHandler(0)}>
            개인
          </Title>
        </TitleContainer>
      ),
      content: <div>내용1</div>,
    },
    {
      title: (
        <TitleContainer>
          <Title key={1} onClick={() => tabClickHandler(1)}>
            기관
          </Title>
        </TitleContainer>
      ),
      content: <div>내용2</div>,
    },
  ];

  return (
    <AuthLayout title="로그인">
      <Container>
        <Wrap>
          <TopBar>
            {tabMenu.map((section, index) => {
              return section.title;
            })}
          </TopBar>
          <div>{tabMenu[activeIndex].content}</div>{' '}
        </Wrap>
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  margin-top: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  border: 1px solid #889287;
  width: 400px;
  ${mobile({ width: '300px' })}
`;

const TopBar = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  width: 200px;
  text-align: center;
  padding: 10px 0;
  background-color: #626a61;
  ${mobile({ width: '150px' })}
`;

const Title = styled.text`
  color: #fff;
`;

export default Login;
