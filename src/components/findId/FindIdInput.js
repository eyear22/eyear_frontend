import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const FindIdInput = () => {
  return (
    <>
      <Container>
        <Wrap>
          <p>이름</p>
          <input placeholder="이름을 입력해주세요." />
        </Wrap>
        <Wrap>
          <p>이메일</p>
          <input placeholder="이메일을 입력해주세요." />
        </Wrap>
        <Button>확인</Button>
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-top: 46px;
  border: 1px solid #889287;
  padding: 40px;
  ${mobile({ padding: 20 })}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  input {
    border: 2px solid #d7d7d7;
    padding: 10px;
    width: 280px;
    ${mobile({ width: 180 })}
    ::placeholder {
      color: #d7d7d7;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #626a61;
  border: none;
  color: #fff;
  margin-top: 20px;
`;

export default FindIdInput;
