import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  span: {
    marginRight: '10px',
    fontSize: '18px',
  },
}));

const UserMenu = ({ email, onLogout }) => {
  const classes = useStyles();
  return (
    <div>
      <span className={classes.span}>Добро пожаловать, {email}</span>
      <Button
        type="button"
        onClick={onLogout}
        variant="contained"
        size="medium"
        color="secondary"
      >
        Выйти
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
