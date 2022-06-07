import styled from 'styled-components';

const TopArea = () => {
  return (
    <Container>
      <div>카테고리</div>
      <div>TopArea</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;

export default TopArea;
