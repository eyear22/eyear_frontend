import styled from 'styled-components';

const PatientListSection = () => {
  return (
    <>
      <Container>
        <Top>환자리스트</Top>
        <Content>PatientListSection</Content>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 68%;
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
  background-color: aliceblue;
`;

export default PatientListSection;
