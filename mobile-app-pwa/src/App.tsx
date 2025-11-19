import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'wouter';
import { isAuthenticated, clearToken } from './lib/auth';
import { api } from './lib/api';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Appointments from './pages/Appointments';
import Prescriptions from './pages/Prescriptions';
import LabResults from './pages/LabResults';
import Messages from './pages/Messages';
import Bills from './pages/Bills';

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  if (!isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return <Component />;
}

export default function App() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          await api.getProfile();
        } catch (error) {
          console.error('Session validation failed:', error);
          clearToken();
          alert('Your session has expired. Please log in again.');
        }
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/dashboard">
        {() => <ProtectedRoute component={Dashboard} />}
      </Route>
      <Route path="/profile">
        {() => <ProtectedRoute component={Profile} />}
      </Route>
      <Route path="/appointments">
        {() => <ProtectedRoute component={Appointments} />}
      </Route>
      <Route path="/prescriptions">
        {() => <ProtectedRoute component={Prescriptions} />}
      </Route>
      <Route path="/lab-results">
        {() => <ProtectedRoute component={LabResults} />}
      </Route>
      <Route path="/messages">
        {() => <ProtectedRoute component={Messages} />}
      </Route>
      <Route path="/bills">
        {() => <ProtectedRoute component={Bills} />}
      </Route>
      <Route>
        {() => <Redirect to="/" />}
      </Route>
    </Switch>
  );
}
