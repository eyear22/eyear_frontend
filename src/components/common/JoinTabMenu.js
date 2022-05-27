import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const JoinTabMenu = ({ idx, Component1, Component2 }) => {
  const tabMenu = [
    {
      content: Component1,
    },
    {
      content: Component2,
    },
  ];

  return (
    <Container>
      <InputArea>{tabMenu[idx.value].content}</InputArea>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f9f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputArea = styled.div`
  background-color: #fff;
  border-top: 1px solid #626a61;
  border-left: 1px solid #889287;
  border-right: 1px solid #889287;
  border-bottom: 1px solid #889287;
  width: 500px;
  ${mobile({ width: '300px' })}
`;

export default JoinTabMenu;
