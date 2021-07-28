import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { classes } = this.props;
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
            Страница регистрации пользователя
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  required
                  onChange={this.handleInput}
                  name="name"
                  id="register-name"
                  value={this.state.name}
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  required
                  onChange={this.handleInput}
                  name="email"
                  id="register-email"
                  value={this.state.email}
                  style={styles.input}
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  required
                  onChange={this.handleInput}
                  name="password"
                  type="password"
                  id="register-password"
                  value={this.state.password}
                  style={styles.input}
                  fullWidth
                  autoComplete="on"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Зарегистрироваться
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
              <Grid item>
                <Link to="/login" variant="body2">
                  Уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Register));
