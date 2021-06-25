import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Bookings from './components/Bookings/Bookings';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
