import Layout from '../common/Layout';
import FindIdInput from './FindIdInput';
import FindIdTop from './FindIdTop';

const FindIdContainer = () => {
  return (
    <>
      <Layout title="아이디 찾기" width={500} bgColor="#fff">
        <FindIdTop question="아이디가 생각나지 않으세요?" desc="등록하신 이름과 이메일 주소를 입력해주세요." />
        <FindIdInput />
      </Layout>
    </>
  );
};

export default FindIdContainer;
