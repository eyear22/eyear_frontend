import { Pagination } from '@mui/material';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import LetterTable from '../components/receive/LetterTable';

const Receive = () => {
  return (
    <Layout title="받은 편지" width={1000}>
      <Filter>카테고리</Filter>
      <LetterTable />
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
