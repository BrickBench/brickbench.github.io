import Navbar from './components/navbar';
import Footer from './components/footer';
import { Installation, ChangeLog, Home, Releases } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
          <Navbar />
          <div style={{flex: '2'}}>
            <Switch>
              <Route path="/installation">
                <Installation />
              </Route>
              <Route path="/releases">
                <Releases />
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
