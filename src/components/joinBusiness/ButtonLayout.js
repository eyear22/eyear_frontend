import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const ButtonLayout = ({ title, placeholder, onClick, btnText, input, onChange, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Right>
        <Input placeholder={placeholder} />
        <Button>{btnText}</Button>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', alignItems: 'normal' })}
`;

const Title = styled.div`
  margin-right: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: 1px solid #d7d7d7;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  ${mobile({ width: 130 })}
`;

const Button = styled.div`
  cursor: pointer;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background-color: #889287;
  color: #fff;
  width: 80px;
  font-size: 14px;
  text-align: center;
`;

export default ButtonLayout;
