import styled from 'styled-components';
import Icon1 from '../../assets/icon_introduce1.png';
import Icon2 from '../../assets/icon_introduce2.png';
import Icon3 from '../../assets/icon_introduce3.png';
import Icon4 from '../../assets/icon_introduce4.png';
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
        <Item>
          <Image src={Icon4} />
          <Title>인증된 병원</Title>
          <SubTitle>
            보건의료빅데이터개방시스템을 통해
            <br />
            요양병원 인증 절차 진행
          </SubTitle>
        </Item>
      </Wrap>
    </Layout>
  );
};

const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${mobile({ paddingLeft: 20, paddingRight: 20, fontSize: 14 })}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: 'column' })}
`;

const Item = styled.div`
  flex-direction: column;
  display: flex;
  padding: 40px 60px;
  border-radius: 8px;
  align-items: center;
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
