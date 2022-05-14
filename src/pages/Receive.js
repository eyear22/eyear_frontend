import { useInput } from '@mui/base';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import LetterTable from '../components/receive/LetterTable';

const LetterList = [
  {
    post_id: 0,
    title: '할머니 보고싶어요.',
    createdAt: '22.02.11',
    from: '김대식',
    check: false,
  },
  {
    post_id: 1,
    title: '손녀 수영이 걸음마 영상.',
    createdAt: '22.02.10',
    from: '박대식',
    check: true,
  },
  {
    post_id: 2,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 3,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 4,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 5,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 6,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 7,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
  {
    post_id: 8,
    title: '할머니 요즘 뭐하면서 지내세요?',
    createdAt: '22.02.09',
    from: '김대식',
    check: true,
  },
];

const Receive = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(LetterList);
  }, []);

  return (
    <Layout title="받은 편지" width={1000}>
      <Filter>카테고리</Filter>
      <LetterTable list={list} />
      <Wrap>
        <StyledPagination count={10} shape="rounded" />
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Filter = styled.div`
  margin-top: 15px;
  text-align: right;
`;

const StyledPagination = styled(Pagination)`
  /* & .Muipaginationitem-root {
  }
  & .MuiPagination-text {
    color: blue;
  }
  & .MuiPagination-outlined {
    color: blue;
  } */
`;

export default Receive;