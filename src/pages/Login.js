import LoginTabMenu from '../components/login/LoginTabMenu';
import Input from '../components/login/Input';
import useInput from '../utils/useInput';
import Layout from '../components/common/Layout';

const Login = () => {
  const activeIndex = useInput(0);
  const id = useInput('');
  const password = useInput('');

  return (
    <Layout title="로그인" bgColor="#fff">
      <LoginTabMenu
        idx={activeIndex}
        Component1={<Input id={id} password={password} flag={activeIndex.value} />}
        Component2={<Input id={id} password={password} flag={activeIndex.value} />}
      />
    </Layout>
  );
};

export default Login;
