import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const LoginTabMenu = ({ idx, Component1, Component2 }) => {
  const tabClickHandler = (v) => idx.onChange(v);
  const tabMenu = [
    {
      title: (
        <TitleContainer key={0} active={!idx.value} onClick={() => tabClickHandler(0)}>
          <Title active={!idx.value}>개인</Title>
        </TitleContainer>
      ),
      content: Component1,
    },
    {
      title: (
        <TitleContainer key={1} active={idx.value} onClick={() => tabClickHandler(1)}>
          <Title active={idx.value}>기관</Title>
        </TitleContainer>
      ),
      content: Component2,
    },
  ];

  return (
    <Container>
      <Wrap>
        <TopBar>
          {tabMenu.map((section, index) => {
            return section.title;
          })}
        </TopBar>
        <TopLine />
        <div>{tabMenu[idx.value].content}</div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  background-color: #fff;
  border: 1px solid #889287;
  width: 500px;
  ${mobile({ width: '300px' })}
`;

const TopBar = styled.div`
  display: flex;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  width: 250px;
  text-align: center;
  padding: 12px 0;
  ${mobile({ width: '150px' })}
  background-color: ${(props) => (props.active ? '#626a61' : '#fff')};
`;

const Title = styled.div`
  color: ${(props) => (props.active ? '#fff' : '#889287')};
`;

const TopLine = styled.div`
  height: 2px;
  background-color: #626a61;
`;

export default LoginTabMenu;
