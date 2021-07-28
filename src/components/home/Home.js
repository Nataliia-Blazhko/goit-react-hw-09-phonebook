import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 50px)',
    flexDirection: 'column',
    alignItems: 'center',
  },

  mainPageTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '20px',
    fontSize: '40',
  },
};

export class Home extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.container}>
          <Typography style={styles.mainPageTitle} variant="h4" align="center">
            Телефонная книга <ContactPhoneIcon style={styles.icon} />
          </Typography>
        </div>
        <p>Все ваши контакты в одном месте</p>
      </div>
    );
  }
}
export default Home;
