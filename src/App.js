import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBar from './components/appbar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import './styles.scss';

const Home = lazy(() => import('./components/home/Home'));
const Register = lazy(() => import('./components/register/Register'));
const Login = lazy(() => import('./components/login/Login'));
const Contacts = lazy(() => import('./components/contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onGetCurrentUser = () => dispatch(authOperations.getCurrentUser());
    onGetCurrentUser();
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Идёт загрузка...</p>}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={Home}
            redirectTo="/contacts"
            restricted
          />
          <PublicRoute
            path="/register"
            component={Register}
            redirectTo="/contacts"
            restricted
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={Login}
          />
          <PrivateRoute
            path="/contacts"
            component={Contacts}
            redirectTo="/"
            restricted
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
