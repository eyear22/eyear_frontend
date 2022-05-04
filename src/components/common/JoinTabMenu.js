import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const JoinTabMenu = ({ idx, title1, title2, Component1, Component2 }) => {
  const tabClickHandler = (v) => idx.onChange(v);
  const tabMenu = [
    {
      title: (
        <TitleContainer key={0} active={!idx.value} onClick={() => tabClickHandler(0)}>
          <Title active={!idx.value}>{title1}</Title>
        </TitleContainer>
      ),
      content: Component1,
    },
    {
      title: (
        <TitleContainer key={1} active={idx.value} onClick={() => tabClickHandler(1)}>
          <Title active={idx.value}>{title2}</Title>
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
      </Wrap>
      <InputArea>{tabMenu[idx.value].content}</InputArea>
    </Container>
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
  padding: 8px 0;
  ${mobile({ width: '150px' })}
  background-color: ${(props) => (props.active ? '#626a61' : '#fff')};
`;

const Title = styled.text`
  color: ${(props) => (props.active ? '#fff' : '#889287')};
  ${mobile({ fontSize: '14px' })}
`;

const InputArea = styled.div`
  margin-top: 30px;
  border: 1px solid #889287;
  width: 500px;
  ${mobile({ width: '300px' })}
`;

export default JoinTabMenu;