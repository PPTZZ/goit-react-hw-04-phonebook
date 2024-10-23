import { Component } from 'react';
import InputForm from './InputForm';
import Search from './Search';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import { Stack } from '@mui/material';
import AlertBox from './AlertBox';

export default class App extends Component {


  componentDidMount(){
    const data = localStorage.getItem('contacts');
    try {
      if (data){
        this.setState({
          contacts: JSON.parse(data)
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate( prevProps, prevState){
    if(prevState?.contacts.length !== this.state.contacts.length){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  
  state = {
    contacts: [
      { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 1, name: 'Hermione Kline', number: '443-89-12' },
      { id: 2, name: 'Eden Clements', number: '645-17-79' },
      { id: 3, name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isOpen: false,
  };

  handleAlert = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleSubmit = data => {
    const id = nanoid(10);
    const contactToAdd = {
      id: id,
      name: data.name,
      number: data.number,
    };
    const found = this.state.contacts
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(data.name.toLocaleLowerCase());
    {
      found
        ? this.handleAlert()
        : this.setState(prevState => {
            return {
              contacts: [...prevState.contacts, contactToAdd],
            };
          });
    }
  };
  handleSearchChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = data => {
    this.setState({ contacts: data });
  };

  render() {
    const fileteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });
    return (
      <>
        <Search onSearchChange={this.handleSearchChange} />
        <Stack
          direction='row'
          width='100vw'
          height='calc(100vh - 90px)'
          backgroundColor='background.default'>
          <InputForm onFormSubmit={this.handleSubmit} />
          <Contacts contacts={fileteredContacts} onDelete={this.handleDelete}/>
        </Stack>
        <AlertBox
          isOpen={this.state.isOpen}
          onAlertToggle={this.handleAlert}
        />
      </>
    );
  }
}
