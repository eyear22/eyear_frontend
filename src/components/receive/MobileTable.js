import styled from 'styled-components';
import Check from '../../assets/icon_check.png';
import UnCheck from '../../assets/icon_uncheck.png';

const MobileTable = ({ list }) => {
  return (
    <Container>
      <Line />
      {list.map((item) => (
        <Wrap key={item.post_id}>
          <First>
            <Icon src={item.check ? Check : UnCheck} />
          </First>
          <Second>
            <From>{item.from}</From>
            <Title>{item.title}</Title>
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
  background-color: #889287;
`;

const Wrap = styled.div`
  display: flex;
  background-color: #fff;
  padding: 12px;
  border-bottom: 1px solid #889287;
`;

const First = styled.div`
  width: 10%;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
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
