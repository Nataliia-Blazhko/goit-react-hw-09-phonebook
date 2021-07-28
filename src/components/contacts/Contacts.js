import React, { Component } from 'react';
import ContactForm from '../contactform/ContactForm';
import ContactList from '../contactlist/ContactList';
import Filter from '../filter/Filter';
import Typography from '@material-ui/core/Typography';

const styles = {
  div: {
    paddingTop: '20px',
    paddingLeft: '20px',
  },
  mainTitle: {
    textAlign: 'center',
    margin: '20px 0',
  },
  subtitle: {
    textAlign: 'center',
    margin: '10px 0',
  },
};

export class Contacts extends Component {
  render() {
    return (
      <div style={styles.div}>
        <Typography variant="h3" style={styles.mainTitle}>
          Телефонная книга
        </Typography>
        <ContactForm />
        <Typography variant="h5" style={styles.subtitle}>
          Контакти
        </Typography>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default Contacts;
