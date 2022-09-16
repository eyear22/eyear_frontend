import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const FindIdResult = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Text>
          아이디 : <p>goodyear</p>
        </Text>
        <Text>
          가입일자 : <p>2022-02-09</p>
        </Text>
      </Container>
      <ButtonWrap>
        <button className="leftBtn" onClick={() => navigate('/login')}>
          로그인
        </button>
        <button className="rightBtn">비밀번호 찾기</button>
      </ButtonWrap>
    </>
  );
};

const Container = styled.section`
  margin-top: 46px;
  border: 1px solid #889287;
  padding: 50px 40px;
  ${mobile({ padding: 20 })}
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  color: #5c5c5c;
  font-size: 18px;
  line-height: 28px;
  white-space: nowrap;
  ${mobile({ fontSize: 16 })}
  p {
    margin: 0 5px;
    font-weight: 600;
    color: #000;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  .leftBtn {
    width: 140px;
    padding: 16px;
    color: #889287;
    background: #fff;
    border: 1px solid #889287;
    cursor: pointer;
    margin-right: 20px;
  }
  .rightBtn {
    width: 140px;
    padding: 16px;
    color: #ffffff;
    background: #626a61;
    border: 1px solid #626a61;
    cursor: pointer;
  }
`;

export default FindIdResult;
