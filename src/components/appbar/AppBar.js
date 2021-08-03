import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../usermenu/UserMenu';
import AuthNav from '../authnav/AuthNav';
import { authSelectors } from '../../redux/auth';
import MaterialAppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#3f51b5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={classes.root}>
      <MaterialAppBar position="static">
        <Container>
          <Toolbar className={classes.appBar}>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </MaterialAppBar>
    </div>
  );
};

export default AppBar;
