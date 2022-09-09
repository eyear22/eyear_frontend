import styled from 'styled-components';

const PatientListSection = ({ patientList }) => {
  return (
    <>
      <Container>
        <Top>환자리스트</Top>
        <Content>
          <Header>
            <div className="area">고유번호</div>
            <div className="area">이름</div>
            <div className="area">성별</div>
            <div className="area">생년월일</div>
          </Header>
          <ItemList>
            {patientList &&
              patientList.map((item, idx) => (
                <Item key={item.id}>
                  <div className="area">{item.number}</div>
                  <div className="area">{item.name}</div>
                  <div className="area">{item.sex === 'male' ? '남성' : '여성'}</div>
                  <div className="area">{item.birth}</div>
                </Item>
              ))}
          </ItemList>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 68%;
  background-color: #fff;
  margin-right: 2%;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  height: 100%;
  @media screen and (max-width: 480px) {
    border: none;
    border-radius: 0;
    width: 100%;
    height: auto;
  }
`;

const Top = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: #889287;
  border-radius: 6px 6px 0px 0px;
  height: 35px;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    border-radius: 0px;
  }
`;

const Content = styled.div`
  padding: 28px 20px 28px 20px;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .area {
    display: flex;
    width: 25%;
    justify-content: center;
  }
`;

const Item = styled.div`
  display: flex;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .area {
    display: flex;
    width: 25%;
    justify-content: center;
  }
`;

const ItemList = styled.div`
  max-height: 380px;
  overflow-y: scroll;
`;

export default PatientListSection;
