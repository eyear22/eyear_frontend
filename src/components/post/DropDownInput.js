import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import styled from 'styled-components';

const DropDownInput = ({ open, setOpen, data, loading, onChange }) => {
  return (
    <div>
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
        options={data}
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
        onChange={onChange}
      />
    </div>
  );
};

const Input = styled(Autocomplete)`
  min-width: 150px;
  margin-right: 10px;
  background-color: #fff;
  border-color: red;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #d9d9d9;
      border-radius: 0px;
    }
  }
  & .MuiInputBase-input {
    height: 4px;
  }
`;

export default DropDownInput;
