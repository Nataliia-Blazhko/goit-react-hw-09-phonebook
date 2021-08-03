import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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

const Filter = () => {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

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
            value={filter}
            onChange={e => dispatch(handleFilter(e.target.value))}
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Filter;

Filter.propTypes = { filter: PropTypes.string, handleFilter: PropTypes.func };
