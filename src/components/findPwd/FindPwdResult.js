import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const FindPwdResult = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Text>
          발송 이메일 주소 <p>goodyear</p>
        </Text>
      </Container>
      <ButtonWrap>
        <button className="leftBtn" onClick={() => navigate('/')}>
          홈으로
        </button>
        <button className="rightBtn" onClick={() => navigate('/login')}>
          로그인
        </button>
      </ButtonWrap>
    </>
  );
};

const Container = styled.section`
  margin-top: 46px;
  border: 1px solid #889287;
  padding: 30px 40px;
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
    margin: 0 20px;
    font-weight: 600;
    color: #5c5c5c;
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

export default FindPwdResult;
