import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact as addContactsToState } from '../../redux/phonebook/phonebook-operations';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
});

const ContactForm = ({ classes }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const addContact = contact => {
    if (contacts.find(person => person.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    if (contacts.find(person => person.number === contact.number)) {
      alert(`${contact.number} is already in contacts`);
      return;
    }
    dispatch(addContactsToState(contact));
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name: name, number: number });
    clearForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          onSubmit={onSubmit}
          className={(classes.root, classes.form)}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Имя"
                variant="filled"
                onChange={e => {
                  setName(e.target.value);
                }}
                value={name}
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Номер телефону"
                variant="filled"
                onChange={e => {
                  setNumber(e.target.value);
                }}
                value={number}
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="secondary"
                className={classes.margin}
                fullWidth
              >
                Добавить контакт
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(ContactForm);
ContactForm.propTypes = { addContact: PropTypes.func };
