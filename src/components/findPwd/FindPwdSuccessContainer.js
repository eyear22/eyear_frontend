import Layout from '../common/Layout';
import FindPwdTop from './FindPwdTop';

const FIndPwdSuccessContainer = () => {
  return (
    <>
      <Layout title="비밀번호 찾기" width={600} bgColor="#fff">
        <FindPwdTop
          question="비밀번호가 이메일로 발송되었습니다."
          desc={'입력해 주신 이메일 주소로 비밀번호가 발송되었습니다.' + '\n' + ' 이메일에서 비밀번호를 확인해 보세요.'}
        />
      </Layout>
    </>
  );
};

export default FIndPwdSuccessContainer;
