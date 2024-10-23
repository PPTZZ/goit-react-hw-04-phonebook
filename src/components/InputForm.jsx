import PropTypes from 'prop-types';
import { Button, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Component } from 'react';

export default class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    e.target.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Stack
            backgroundColor='background.white'
            sx={{
              borderRight:'1px solid #dedede',
              borderBottom:'1px solid #dedede',
              p:'10px',
              width: 400,

            }}
            spacing={2}>
            <TextField
              onChange={this.handleChange}
              label='Name'
              id='name-input'
              type='text'
              name='name'
              inputbasecomponentprops={{pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
            <TextField
              onChange={this.handleChange}
              label='Phone'
              type='number'
              name='number'
              inputbasecomponentprops={{pattern:" +?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}"}}
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
  }
}

InputForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
