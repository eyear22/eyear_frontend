import styled from 'styled-components';
import Check from '../../assets/icon_check.png';
import UnCheck from '../../assets/icon_uncheck.png';

const ReceiveTable = ({ list }) => {
  const size = list.length;
  const onClick = (id) => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <>
      <Table>
        <THead>
          <tr>
            <THeadTd width={30}>번호</THeadTd>
            <THeadTd width={30}>확인</THeadTd>
            <THeadTd>제목</THeadTd>
            <THeadTd width={80}>작성자</THeadTd>
            <THeadTd width={100}>작성일</THeadTd>
          </tr>
        </THead>
        <TBody>
          {list.map((item, index) => (
            <Tr key={item.post_id} onClick={() => onClick(item.post_id)} check={item.check}>
              <Td>{size - index}</Td>
              <Td>
                <Icon src={item.check ? Check : UnCheck} />
              </Td>
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
  font-size: 16px;
  background-color: #f9f9fa;
`;

const THead = styled.thead`
  border-top: 3px solid #889287;
  background-color: #f9f9fa;
  border-bottom: 3px solid #ebeeec;
`;

const THeadTd = styled.td`
  padding: 12px;
  width: ${(props) => props.width || 'auto'};
`;

const TBody = styled.tbody`
  font-size: 16px;
`;

const Tr = styled.tr`
  cursor: pointer;
  color: ${(props) => (props.check ? '#2b2b2b' : '#225cba')};
  border-bottom: 1px solid #ebeeec;
  &:hover {
    text-decoration: underline;
  }
`;

const TitleTd = styled.td`
  border-right: 1px solid #ebeeec;
  text-align: left;
  padding: 12px;
  padding-left: 20px;
`;

const Td = styled.td`
  border-right: 1px solid #ebeeec;
  justify-content: center;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
`;

export default ReceiveTable;
