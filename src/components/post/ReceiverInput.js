import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDownInput from './DropDownInput';

const sleep = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const patientsData = [
  { pat_id: '0', pat_number: '0', pat_name: '김땡땡' },
  { pat_id: '1', pat_number: '1', pat_name: '이땡땡' },
  { pat_id: '2', pat_number: '2', pat_name: '박땡땡' },
  { pat_id: '3', pat_number: '3', pat_name: '손땡땡' },
  { pat_id: '4', pat_number: '4', pat_name: '전땡떙' },
];

const usersData = [
  { user_id: '0', pat_id: '0', username: '김밍밍' },
  { user_id: '1', pat_id: '0', username: '이밍밍' },
  { user_id: '2', pat_id: '0', username: '박밍밍' },
  { user_id: '3', pat_id: '1', username: '손밍밍' },
  { user_id: '4', pat_id: '1', username: '전밍밍' },
  { user_id: '5', pat_id: '2', username: '조밍밍' },
  { user_id: '6', pat_id: '3', username: '백밍밍' },
  { user_id: '7', pat_id: '3', username: '김밍밍' },
  { user_id: '8', pat_id: '4', username: '최밍밍' },
  { user_id: '9', pat_id: '4', username: '유밍밍' },
];

const ReceiverInput = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [options, setOptions] = useState([]);
  const [patient, setPatient] = useState(0);
  const [users, setUsers] = useState([]);
  const loading = open && options.length === 0;
  const loading2 = false;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...patientsData]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    let active = true;

    if (!patient) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);

      if (active) {
        const array = usersData.map((user) => user.pat_id === patient && user.username);
        setUsers(array);
      }
    })();

    return () => {
      active = false;
    };
  }, [patient]);

  return (
    <Container>
      <DropDownInput open={open} setOpen={setOpen} data={options} loading={loading} onChange={console.log('click1')} />
      <DropDownInput open={open2} setOpen={setOpen2} data={options} loading={loading2} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default ReceiverInput;
