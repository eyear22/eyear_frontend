import Layout from '../common/Layout';
import FindIdResult from './FindIdResult';
import FindIdTop from './FindIdTop';

const FIndIdSuccessContainer = () => {
  return (
    <>
      <Layout title="아이디 찾기" width={600} bgColor="#fff">
        <FindIdTop question="아이디 찾기가 완료되었습니다." desc="아이어를 이용해주셔서 감사합니다." />
        <FindIdResult />
      </Layout>
    </>
  );
};

export default FIndIdSuccessContainer;
