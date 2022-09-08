import styled from 'styled-components';

const AddPatientSection = () => {
  return (
    <>
      <Container>
        <Top>환자추가</Top>
        <Content>
          <Title>환자 고유번호</Title>
          <Input placeholder="환자고유번호를 입력해주세요." />
          <Title>환자 이름</Title>
          <Input placeholder="환자이름을 입력해주세요." />
          <Title>환자 성별</Title>
          <SelectWrap>
            <div className="selectItem">남</div>
            <div className="selectItem">여</div>
          </SelectWrap>
          <Title>환자 생년월일</Title>
          <Input placeholder="2000-02-10" />
        </Content>
        <ButtonWrap>
          <Button>등록하기</Button>
        </ButtonWrap>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 30%;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  border-radius: 6px;
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
  @media screen and (max-width: 480px) {
    padding: 24px 20px 0 20px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  margin-bottom: 5px;
`;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const SelectWrap = styled.div`
  display: flex;
  height: 35px;
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  .selectItem {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#889287' : '#fff')};
    color: ${(props) => (props.active ? '#fff' : '#black')};
    font-size: 14px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #626a61;
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default AddPatientSection;
