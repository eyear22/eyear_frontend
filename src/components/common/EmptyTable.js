import styled from 'styled-components';

// 편지리스트가 비었을 때
const EmptyTable = ({ flag, content }) => {
  const text = flag == 0 ? '받은' : '보낸';
  return (
    <Container>
      <Tr>
        <Td colSpan={5}>{content || text + ' 편지가 존재하지 않습니다.'}</Td>
      </Tr>
    </Container>
  );
};

const Container = styled.tbody`
  text-align: left;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 20px 10px;
`;

export default EmptyTable;
