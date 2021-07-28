import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export class ContactListItem extends Component {
  render() {
    const { name, number, id, deleteContact } = this.props;
    return (
      <ListItem>
        <ListItemIcon>
          <ContactPhoneIcon />
        </ListItemIcon>
        <ListItemText primary={name} secondary={number} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteContact(id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
