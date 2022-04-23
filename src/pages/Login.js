import { useState } from 'react';
import styled from 'styled-components';
import AuthLayout from '../components/common/AuthLayout';
import Input from '../components/login/Input';
import { mobile } from '../utils/responsive';

const Login = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (idx) => setActiveIndex(idx);
  const tabMenu = [
    {
      title: (
        <TitleContainer key={0} active={!activeIndex} onClick={() => tabClickHandler(0)}>
          <Title active={!activeIndex}>개인</Title>
        </TitleContainer>
      ),
      content: <Input />,
    },
    {
      title: (
        <TitleContainer key={1} active={activeIndex} onClick={() => tabClickHandler(1)}>
          <Title active={activeIndex}>기관</Title>
        </TitleContainer>
      ),
      content: <Input />,
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
          <TopLine />
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
  cursor: pointer;
`;

const TitleContainer = styled.div`
  width: 200px;
  text-align: center;
  padding: 12px 0;
  ${mobile({ width: '150px' })}
  background-color: ${(props) => (props.active ? '#626a61' : '#fff')};
`;

const Title = styled.text`
  color: ${(props) => (props.active ? '#fff' : '#889287')};
`;

const TopLine = styled.div`
  height: 2px;
  background-color: #626a61;
`;

export default Login;
