import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UserProfile/UsersList';
import User from './components/UserProfile/User';
import { authenticate } from './store/session';
import SplashPage from './components/SplashPage/SplashPage';
import GetUserBoards from './components/UserProfile/UserBoards/GetUserBoards';
import SingleBoard from './components/Board/SingleBoard';
import PinFeedPage from './components/PinFeedPage/PinFeedPage';
import SinglePin from './components/Pin/SinglePin';
import CreateAPin from './components/Pin/CreatePin/CreatePin';
import SearchResultPage from './components/Search/SearchResultPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/pins" exact={true}>
          <PinFeedPage />
        </Route>
        <Route path="/pins/:pinId" exact={true}>
          <SinglePin />
        </Route>
        <Route path="/boards/:boardId" exact={true}>
          <SingleBoard />
        </Route>
        <Route path="/search/boards" exact={true}>
          <SearchResultPage />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
