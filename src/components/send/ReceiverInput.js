import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const ReceiverInput = () => {
  const [options, setOptions] = useState([]);
  const loading = false;
  return (
    <Container>
      <Title>받는 사람</Title>
      <Input
        options={options}
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
