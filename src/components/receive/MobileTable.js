import styled from 'styled-components';
import Check from '../../assets/icon_check.png';
import UnCheck from '../../assets/icon_uncheck.png';

const MobileTable = ({ list }) => {
  // 글자수 제한
  const limitTitle = (title) => (title.length > 13 ? title.substr(0, 13) + '...' : title);

  // 편지 상세 페이지로 이동
  const onClick = (id) => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <Container>
      <Line />
      {list.map((item) => (
        <Wrap key={item.post_id} onClick={() => onClick(3)}>
          <First>
            <Icon src={item.check ? Check : UnCheck} />
          </First>
          <Second>
            <From>{item.from}</From>
            <Title>{limitTitle(item.title)}</Title>
          </Second>
          <Third>{item.createdAt}</Third>
        </Wrap>
      ))}
    </Container>
  );
};

const Container = styled.div``;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebeeec;
`;

const Wrap = styled.div`
  display: flex;
  background-color: #fff;
  padding: 12px;
  border-bottom: 1px solid #ebeeec;
`;

const First = styled.div`
  width: 10%;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const Second = styled.div`
  width: 60%;
`;

const From = styled.div`
  font-weight: bold;
`;

const Title = styled.div``;

const Third = styled.div`
  color: #999999;
  display: flex;
  width: 30%;
  justify-content: flex-end;
`;

export default MobileTable;
