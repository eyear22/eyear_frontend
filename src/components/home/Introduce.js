import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import Layout from './Layout';

const Introduce = () => {
  return (
    <Layout title="아이어 소개">
      <Desc>
        아이어는 요양병원을 이용하는 노인과 가족들간의 면회 상황에서 노인들이 겪는 불편함을 발견하면서 시작됐습니다.
      </Desc>
    </Layout>
  );
};

const Desc = styled.div`
  padding-left: 10vw;
  ${mobile({ paddingLeft: '10vw', paddingRight: '10vw' })}
`;

export default Introduce;
