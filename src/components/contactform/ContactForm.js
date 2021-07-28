import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
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

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = contact => {
    if (this.props.contacts.find(person => person.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    if (this.props.contacts.find(person => person.number === contact.number)) {
      alert(`${contact.number} is already in contacts`);
      return;
    }
    this.props.addContact(contact);
    this.clearForm();
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearForm = () => {
    this.setState({ name: '', number: '' });
  };

  onSubmit = e => {
    e.preventDefault();
    this.addContact(this.state);
    this.clearForm();
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form
            onSubmit={this.onSubmit}
            className={(classes.root, classes.form)}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Имя"
                  variant="filled"
                  onChange={this.handleInput}
                  value={this.state.name}
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
                  onChange={this.handleInput}
                  value={this.state.number}
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
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(ContactForm));
ContactForm.propTypes = { addContact: PropTypes.func };
