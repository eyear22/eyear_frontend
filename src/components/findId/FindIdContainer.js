import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';
import FindIdInput from './FindIdInput';
import FindIdTop from './FindIdTop';

const FindIdContainer = () => {
  const navigate = useNavigate();
  const findIdClick = () => navigate('/findId/success');
  return (
    <>
      <Layout title="아이디 찾기" width={500} bgColor="#fff">
        <FindIdTop question="아이디가 생각나지 않으세요?" desc="등록하신 이름과 이메일 주소를 입력해주세요." />
        <FindIdInput onClick={findIdClick} />
      </Layout>
    </>
  );
};

export default FindIdContainer;
