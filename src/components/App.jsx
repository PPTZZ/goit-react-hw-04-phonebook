import { useEffect, useState } from 'react';
import InputForm from './InputForm';
import Search from './Search';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import { Stack } from '@mui/material';
import AlertBox from './AlertBox';

const App = () => {
	const [myContacts, setContacts] = useState([
		{ id: 0, name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 1, name: 'Hermione Kline', number: '443-89-12' },
		{ id: 2, name: 'Eden Clements', number: '645-17-79' },
		{ id: 3, name: 'Annie Copeland', number: '227-91-26' },
	]);

	const [contactFilter, setFilter] = useState('');
	const [openAlert, setOpenAlert] = useState(false);


	useEffect(() => {
		const data = localStorage.getItem('contacts');
		try {
			if (data) {
				setContacts(JSON.parse(data));
			}
		} catch (error) {
			console.log(error);
		}
    console.log('use effect 1');
    
	}, []);

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(myContacts))
    console.log('use effect 2');
  },[myContacts])

	const handleAlert = () => {
		setOpenAlert(!openAlert);
	};

	const handleSubmit = (data) => {
		const id = nanoid(10);
		const contactToAdd = {
			id: id,
			name: data.name,
			number: data.number,
		};

		const found = myContacts
			.map((contact) => contact.name.toLocaleLowerCase())
			.includes(data.name.toLocaleLowerCase());

		{
			found ? handleAlert() : setContacts([...myContacts, contactToAdd]);
		}
	};
	const handleSearchChange = (e) => {
		setFilter(e.target.value);
	};

	const handleDelete = (data) => {
		setContacts(data);
	};

	const filteredContacts = myContacts.filter((contact) => {
		return contact.name
			.toLocaleLowerCase()
			.includes(contactFilter.toLocaleLowerCase());
	});

	return (
		<>
			<Search onSearchChange={handleSearchChange} />
			<Stack
				direction='row'
				width='100vw'
				height='calc(100vh - 90px)'
				backgroundColor='background.default'
			>
				<InputForm onFormSubmit={handleSubmit} />
				<Contacts onDelete={handleDelete} contactList={filteredContacts} />
			</Stack>
			<AlertBox isOpen={openAlert} onAlertToggle={handleAlert} />
		</>
	);
};

export default App;
