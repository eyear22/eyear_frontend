import styled from 'styled-components';

const ItemLayout = ({ title, children, width }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrap width={width}>{children}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: #252525;
  margin-bottom: 4px;
`;

const Wrap = styled.div`
  padding: 5px 8px;
  border: 1px solid #d9d9d9;
  background-color: white;
  width: ${(props) => props.width || '100%-16px'};
`;

export default ItemLayout;
