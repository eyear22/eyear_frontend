import styled from 'styled-components';
import Layout from '../common/Layout';
import DoneIcon from '../../assets/icon_joinDone.png';
import { useNavigate } from 'react-router-dom';

const ChangePwdSuccessContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout title="" width={600} bgColor="#fff">
        <Wrap>
          <Icon src={DoneIcon} />
          <Title>비밀번호 변경 완료</Title>
        </Wrap>
        <ButtonWrap>
          <button className="leftBtn" onClick={() => navigate('/')}>
            홈으로
          </button>
          <button className="rightBtn" onClick={() => navigate('/login')}>
            로그인
          </button>
        </ButtonWrap>
      </Layout>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
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

export default ChangePwdSuccessContainer;
