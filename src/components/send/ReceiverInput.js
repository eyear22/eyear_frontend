import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  const [options, setOptions] = useState([]);
  const [patient, setPatient] = useState(0);
  const [users, setUsers] = useState([]);
  const loading = open && options.length === 0;

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
        console.log(patient);
        const array = usersData.map((user) => user.pat_id === patient && user.username);
        console.log(array);
        setUsers(array);
      }
    })();

    return () => {
      active = false;
    };
  }, [patient]);

  return (
    <Container>
      <Title>받는 사람</Title>
      <Input
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.pat_id === value.pat_id}
        getOptionLabel={(option) => option.pat_name}
        options={patientsData}
        loading={loading}
        sx={{ maxWidth: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        onChange={(e, obj) => {
          setPatient(obj.pat_id);
        }}
      />
      <Input
        isOptionEqualToValue={(option, value) => option.user_id === value.user_id}
        getOptionLabel={(option) => option.username}
        options={users}
        sx={{ maxWidth: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const Title = styled.text`
  color: #252525;
  font-size: 20px;
`;

const Input = styled(Autocomplete)`
  margin: 5px 0;
  background-color: #fff;
  border-color: red;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #d9d9d9;
    }
  }
  & .MuiInputBase-input {
    height: 8px;
  }
`;

export default ReceiverInput;
