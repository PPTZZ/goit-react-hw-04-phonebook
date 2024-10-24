import { Box, Chip, Grid2, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

const Contacts = ({contactList, onDelete}) => {
	const handleDelete = (e) => {
		if (e.target.nodeName === 'DIV' || e.target.nodeName === 'P') {
			return;
		}
		const filteredContacts = contactList.filter(
			(contact) => contact.id != e.currentTarget.id
		);
		onDelete(filteredContacts);
	};
	const renderContacts = (contactList) => {
		return contactList.map((contact) => {
			return (
				<Box
					key={contact.id}
					id={contact.id}
					onClick={handleDelete}
					sx={{
						p: 1,
						width: 'calc(100vw - 420px)',
						mb: 1,
						bgcolor: 'background.white',
						border: '1px #dedede solid',
						height: 90,
						borderRadius: 1.5,
						overflow: 'hidden',
					}}
				>
					<Grid2
						container
						columnSpacing={2}
						sx={{
							alignItems: 'center',
							height: '100%',
							justifyContent: 'space-between',
						}}
					>
						<Grid2
							container
							direction='column'
							justifyContent='space-between'
							height={1}
						>
							<Typography>Name: {contact.name} </Typography>
							<Typography>Phone Number: {contact.number}</Typography>
						</Grid2>
						<Grid2>
							<Chip
								label={<DeleteIcon />}
								sx={{ '&:hover': { cursor: 'pointer', bgcolor: 'lightgray' } }}
							/>
						</Grid2>
					</Grid2>
				</Box>
			);
		});
	};

	return <Box sx={{ p: '10px' }}>{renderContacts(contactList)}</Box>;
};

Contacts.propTypes = {
	getContacts: PropTypes.func,
	contactList: PropTypes.array,
	onDelete: PropTypes.func,
};
export default Contacts