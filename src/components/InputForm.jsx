import PropTypes from 'prop-types';
import { Button, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const InputForm = props => {
  console.log(props);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit({ name, number });
    e.target.reset();
  };

 const handleChange = e => {
    const { name, value } = e.target;
    console.log(e.target.value);

    // setName(name)
    // setNumber()
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack
          backgroundColor='background.white'
          sx={{
            borderRight: '1px solid #dedede',
            borderBottom: '1px solid #dedede',
            p: '10px',
            width: 400,
          }}
          spacing={2}>
          <TextField
            onChange={handleChange}
            label='Name'
            id='name-input'
            type='text'
            name='name'
            inputbasecomponentprops={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
          <TextField
            onChange={handleChange}
            label='Phone'
            type='number'
            name='number'
            inputbasecomponentprops={{
              pattern:
                ' +?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            }}
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
          <Button variant='contained' type='submit' startIcon={<AddIcon />}>
            <Typography>contact</Typography>
          </Button>
        </Stack>
      </form>
    </>
  );
};

InputForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default InputForm;
