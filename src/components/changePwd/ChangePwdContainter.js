import Layout from '../common/Layout';
import ChangePwdInput from './ChangePwdInput';

const ChangePwdContainter = () => {
  return (
    <>
      <Layout title="비밀번호 변경하기" width={500} bgColor="#fff">
        <ChangePwdInput />
      </Layout>
    </>
  );
};

export default ChangePwdContainter;
