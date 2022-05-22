import styled from 'styled-components';
import Icon1 from '../../assets/icon_introduce1.png';
import Icon2 from '../../assets/icon_introduce2.png';
import Icon3 from '../../assets/icon_introduce3.png';
import { mobile } from '../../utils/responsive';
import Layout from './Layout';

const Introduce = () => {
  return (
    <Layout title="아이어 소개">
      <Desc>
        아이어는 요양병원을 이용하는 노인과 가족들간의 면회 상황에서 노인들이 겪는 불편함을 발견하면서 시작됐습니다.
      </Desc>
      <Wrap>
        <Item>
          <Image src={Icon1} />
          <Title>아이어</Title>
          <SubTitle>
            영상을 주고받으며 <br />
            소통할 수 있는 플랫폼 서비스
          </SubTitle>
        </Item>
        <Item>
          <Image src={Icon2} />
          <Title>베리어프리 서비스</Title>
          <SubTitle>
            소통의 어려움을 해결하기 위해
            <br />
            영상 자동 자막 생성 기능 제작
          </SubTitle>
        </Item>
        <Item>
          <Image src={Icon3} />
          <Title>사용 방법</Title>
          <SubTitle>
            편지 쓰기를 통해 영상 전송
            <br />
            보낸 편지를 통해 확인
          </SubTitle>
        </Item>
      </Wrap>
    </Layout>
  );
};

const Desc = styled.div`
  padding-left: 100px;
  ${mobile({ paddingLeft: '10vw', paddingRight: '10vw' })}
`;

const Wrap = styled.div`
  display: flex;
  margin-left: 100px;
`;

const Item = styled.div`
  flex-direction: column;
  display: flex;
  width: 400px;
  padding: 50px 20px;
  border-radius: 8px;
  align-items: center;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-right: 80px;
`;

const Image = styled.img`
  width: 120px;
`;

const Title = styled.div`
  margin: 20px 0;
  font-weight: bold;
  font-size: 20px;
`;

const SubTitle = styled.div`
  color: #5c5c5c;
  text-align: center;
`;

export default Introduce;
