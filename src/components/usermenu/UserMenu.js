import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  span: {
    marginRight: '10px',
    fontSize: '18px',
  },
}));

const UserMenu = () => {
  const email = useSelector(state => authSelectors.getUserEmail(state));

  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
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

export default UserMenu;
