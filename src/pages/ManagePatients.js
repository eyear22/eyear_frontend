import styled from 'styled-components';
import TopImg from '../assets/img_receive.png';
import ImgLayout from '../components/common/ImgLayout';

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, InputBase, InputLabel, OutlinedInput } from '@mui/material';

const createPatients = (pat_num, pat_name, sex, birth) => ({
  pat_num,
  pat_name,
  sex,
  birth,
  family: [
    {
      name: '김수진',
      relation: '딸',
      sex: '여성',
      email: 'test@gmail.com',
    },
    {
      name: '김수조',
      relation: '아들',
      sex: '남성',
      email: 'te2st@gmail.com',
    },
  ],
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.pat_num}
        </TableCell>
        <TableCell>{row.pat_name}</TableCell>
        <TableCell>{row.sex}</TableCell>
        <TableCell>{row.birth}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Typography variant="h6" gutterBottom component="div">
                보호자
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>이름</TableCell>
                    <TableCell>가족관계</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>이메일</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.family.map((familyRow) => (
                    <TableRow key={familyRow.email}>
                      <TableCell component="th" scope="row">
                        {familyRow.name}
                      </TableCell>
                      <TableCell>{familyRow.relation}</TableCell>
                      <TableCell>{familyRow.sex}</TableCell>
                      <TableCell>{familyRow.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createPatients(123, '김대식', '여성', '1970-12-30'),
  createPatients(230, '최필재', '남성', '1974-01-23'),
  createPatients(231, '이필재', '남성', '1974-01-21'),
];

const ManagePatients = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <ImgLayout title={`${user.user.hos_name} 환자관리`} src={TopImg} width={'100%'}>
      <Wrap>
        <Input />
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>고유번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>생년월일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.pat_num} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrap>
    </ImgLayout>
  );
};

const Wrap = styled.div`
  width: 1200px;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 80%;
  height: 20px;
  border: none;
  margin-bottom: 20px;
  padding: 5px;
`;

export default ManagePatients;
