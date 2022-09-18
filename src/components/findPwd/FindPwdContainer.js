import styled from 'styled-components';
import Layout from '../common/Layout';
import FindPwdTop from './FindPwdTop';

const FindPwdContainer = () => {
  return (
    <>
      <Layout title="비밀번호 찾기" width={500} bgColor="#fff">
        <FindPwdTop question="비밀번호가 생각나지 않으세요?" desc="아이디와 이메일 주소를 입력해주세요." />
        <div>FindPwdContainer</div>
      </Layout>
    </>
  );
};

export default FindPwdContainer;
