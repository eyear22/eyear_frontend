import styled from 'styled-components';
import Icon1 from '../../assets/icon_introduce1.png';
import Icon2 from '../../assets/icon_introduce2.png';
import Icon3 from '../../assets/icon_introduce3.png';
import Icon4 from '../../assets/icon_introduce4.png';
import { mobile } from '../../utils/responsive';
import Layout from './Layout';

const items = [
  {
    key: 0,
    img: Icon1,
    title: '아이어',
    subTitle: '영상을 주고받으며 ' + '\n' + ' 소통할 수 있는 플랫폼 서비스',
  },
  {
    key: 1,
    img: Icon2,
    title: '베리어프리 서비스',
    subTitle: '소통의 어려움을 해결하기 위해 ' + '\n' + '영상 자동 자막 생성 기능 제작',
  },
  {
    key: 2,
    img: Icon3,
    title: '사용 방법',
    subTitle: '편지 쓰기를 통해 영상 전송 ' + '\n' + '보낸 편지를 통해 확인',
  },
  {
    key: 3,
    img: Icon4,
    title: '인증된 병원',
    subTitle: '보건의료빅데이터개방시스템을 통해 ' + '\n' + '요양병원 인증 절차 진행',
  },
];

const Introduce = () => {
  return (
    <Layout title="아이어 소개">
      <Desc>
        아이어는 요양병원을 이용하는 노인과 가족들간의 면회 상황에서 노인들이 겪는 불편함을 발견하면서 시작됐습니다.
      </Desc>
      <Wrap>
        {items.map(({ key, img, title, subTitle }) => (
          <Item key={key}>
            <Image src={img} />
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Item>
        ))}
      </Wrap>
    </Layout>
  );
};

const Desc = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${mobile({ paddingLeft: 20, paddingRight: 20, fontSize: 14 })}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  ${mobile({ flexDirection: 'column' })}
  white-space: pre-wrap;
`;

const Item = styled.div`
  flex-direction: column;
  display: flex;
  padding: 40px 60px;
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
