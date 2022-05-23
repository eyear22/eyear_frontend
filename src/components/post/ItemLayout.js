import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const ItemLayout = ({ title, center, children }) => {
  return (
    <Container center={center}>
      <Title center={center}>{title}</Title>
      <Wrap>{children}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  font-size: 16px;
  margin-bottom: 20px;
  ${mobile({ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10 })}
`;

const Title = styled.div`
  width: 20%;
  margin-top: ${(props) => (props.center ? '0px' : '10px')};
  ${mobile({ marginBottom: 2 })}
`;

const Wrap = styled.div`
  width: 80%;
  ${mobile({ width: '100%' })}
`;

export default ItemLayout;
