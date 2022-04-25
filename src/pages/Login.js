import AuthLayout from '../components/common/AuthLayout';
import TabMenuLayout from '../components/common/TabMenuLayout';
import Input from '../components/login/Input';
import useInput from '../utils/useInput';

const Login = () => {
  const activeIndex = useInput(0);
  const id = useInput('');
  const password = useInput('');

  return (
    <AuthLayout title="로그인">
      <TabMenuLayout idx={activeIndex} Component1={<Input />} Component2={<Input />} />
    </AuthLayout>
  );
};

export default Login;
