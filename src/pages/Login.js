import AuthLayout from '../components/common/AuthLayout';
import LoginTabMenu from '../components/common/LoginTabMenu';
import Input from '../components/login/Input';
import useInput from '../utils/useInput';

const Login = () => {
  const activeIndex = useInput(0);
  const id = useInput('');
  const password = useInput('');

  return (
    <AuthLayout title="로그인">
      <LoginTabMenu
        idx={activeIndex}
        Component1={<Input id={id} password={password} />}
        Component2={<Input id={id} password={password} />}
      />
    </AuthLayout>
  );
};

export default Login;
