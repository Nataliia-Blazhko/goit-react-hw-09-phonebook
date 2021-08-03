import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff99',
    marginRight: '20px',
  },
  activeLink: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));
  return (
    <div className={classes.root}>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        <Typography variant="h6" className={classes.title}>
          Главная
        </Typography>
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <Typography variant="h6" className={classes.title}>
            Телефонная книга
          </Typography>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
