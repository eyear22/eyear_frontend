import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const InputLayout = ({ title, value, disabled, onChange, placeholder }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input value={value} onChange={onChange} placeholder={placeholder} readOnly={disabled} disabled={disabled} />
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

const Input = styled.input`
  padding: 10px;
  width: 310px;
  border: 1px solid #d7d7d7;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  ${mobile({ width: 240 })}
`;

export default InputLayout;
