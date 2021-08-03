import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const Login = ({ onLogin, classes }) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authOperations.logIn({
        email: email,
        password: password,
      }),
    );
    setEmail('');
    setPass('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="textSecondary"
        >
          Страница авторизации пользователя{' '}
        </Typography>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={classes.form}
          noValidate
        >
          <label htmlFor="login-email">E-mail</label>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            type="email"
            id="login-email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="login-password"
            value={password}
            onChange={e => setPass(e.target.value)}
            autoComplete="on"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {' '}
            Войти{' '}
          </Button>
          <Grid container>
            <Grid item>
              <Link to="register" variant="body2">
                {'У вас ещё нет аккаунта? Зарегистрируйтесь'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
