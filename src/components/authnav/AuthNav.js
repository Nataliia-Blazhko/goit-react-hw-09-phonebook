import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '250px',
  },

  link: {
    textDecoration: 'none',
    color: '#ffffff99',
  },
  activeLink: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const AuthNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavLink
        to="register"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        <Typography variant="h6">Регистрация</Typography>
      </NavLink>
      <NavLink
        to="login"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        {' '}
        <Typography variant="h6">Авторизация </Typography>
      </NavLink>
    </div>
  );
};

export default AuthNav;
