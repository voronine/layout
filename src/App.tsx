import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/slices/aythSlice';
import Navigation from './navigation/Navigation';

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
    <Router basename="/dashboard/">
      <Navigation />
    </Router>
  );
};

export default App;
