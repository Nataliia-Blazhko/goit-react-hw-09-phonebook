import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleFilter } from '../../redux/phonebook/phonebook-actions';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  subtitle: {
    paddingBottom: '15px',
  },
};

export class Filter extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h6"
              className="text"
              align="center"
              style={styles.subtitle}
            >
              Найдите контакт по имени
            </Typography>
            <TextField
              variant="outlined"
              value={this.props.filter}
              onChange={this.props.handleFilter}
              type="text"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilter: event => dispatch(handleFilter(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = { filter: PropTypes.string, handleFilter: PropTypes.func };
