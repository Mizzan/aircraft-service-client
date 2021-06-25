import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Bookings from './components/Bookings/Bookings';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
