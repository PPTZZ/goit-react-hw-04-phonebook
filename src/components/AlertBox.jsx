import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PropTypes from 'prop-types';

const AlertBox = ({ isOpen, onAlertToggle }) => {
	return (
		<Dialog open={isOpen}>
			<DialogTitle
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					color: 'error.main',
				}}
			>
				<ErrorIcon sx={{ color: 'error.main' }} />
				Faileure
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					This name is already in contact list. Please try something else.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button sx={{ color: 'black' }} onClick={onAlertToggle}>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};
AlertBox.propTypes = {
	isOpen: PropTypes.bool,
	onAlertToggle: PropTypes.func.isRequired,
};
export default AlertBox;
