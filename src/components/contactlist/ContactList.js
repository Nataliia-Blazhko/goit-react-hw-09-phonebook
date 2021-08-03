import { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-operations';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

const ContactList = () => {
  const loading = useSelector(state => state.phonebook.loading);
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <Grid container direction="row" justifyContent="center">
      <List xs={12} md={6} style={{ width: '400px' }}>
        {loading ? (
          <div>Идёт загрузка...</div>
        ) : (
          contacts
            .filter(item =>
              item.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map(item => <ContactListItem key={item.id} {...item} />)
        )}
      </List>
    </Grid>
  );
};

export default ContactList;

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
