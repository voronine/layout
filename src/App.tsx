import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './navigation/Navigation';
import { loginSuccess } from './redux/slices/aythSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(loginSuccess({ user: parsedUser, token: parsedUser.accessToken }));
    }
  }, [dispatch]);

  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
