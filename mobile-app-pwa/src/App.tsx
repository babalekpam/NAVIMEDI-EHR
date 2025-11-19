import { Route, Switch, Redirect } from 'wouter';
import { isAuthenticated } from './lib/auth';
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
