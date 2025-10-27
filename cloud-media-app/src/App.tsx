import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ProPage from './pages/ProPage';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { MediaProvider } from './context/MediaContext';

const App = () => {
  return (
    <AuthProvider>
      <MediaProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/pro" component={ProPage} />
            <Route path="/admin" component={AdminDashboard} />
          </Switch>
        </Router>
      </MediaProvider>
    </AuthProvider>
  );
};

export default App;