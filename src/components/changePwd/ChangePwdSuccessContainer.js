import styled from 'styled-components';
import Layout from '../common/Layout';
import DoneIcon from '../../assets/icon_joinDone.png';

const ChangePwdSuccessContainer = () => {
  return (
    <>
      <Layout title="" width={600} bgColor="#fff">
        <Wrap>
          <Icon src={DoneIcon} />
          <Title>비밀번호 변경 완료</Title>
        </Wrap>
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

export default ChangePwdSuccessContainer;
