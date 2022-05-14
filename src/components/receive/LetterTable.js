import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LetterTable = ({ list }) => {
  const size = list.length;
  const onClick = (id) => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <>
      <Table>
        <THead>
          <tr>
            <THeadTd width={50}>번호</THeadTd>
            <THeadTd width={60}>확인</THeadTd>
            <THeadTd>제목</THeadTd>
            <THeadTd width={80}>작성자</THeadTd>
            <THeadTd width={100}>작성일</THeadTd>
          </tr>
        </THead>
        <TBody>
          {list.map((item, index) => (
            <Tr key={item.post_id} onClick={() => onClick(item.post_id)}>
              <Td>{size - index}</Td>
              <Td>{item.check ? 'y' : 'n'}</Td>
              <TitleTd>{item.title}</TitleTd>
              <Td>{item.from}</Td>
              <td>{item.createdAt}</td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </>
  );
};

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin-top: 10px;
`;

const THead = styled.thead`
  border-top: 3px solid #889287;
`;

const THeadTd = styled.td`
  padding: 12px;
  width: ${(props) => props.width || 'auto'};
`;

const TBody = styled.tbody`
  background-color: #fff;
  border-top: 2.2px solid #889287;
  border-bottom: 2.2px solid #889287;
`;

const Tr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid #ebeeec;
  &:hover {
    color: #252525;
  }
`;

const TitleTd = styled.td`
  border-right: 2px solid #ebeeec;
  text-align: left;
  padding: 15px;
  padding-left: 30px;
`;

const Td = styled.td`
  border-right: 2px solid #ebeeec;
  padding: 15px;
`;

export default LetterTable;
