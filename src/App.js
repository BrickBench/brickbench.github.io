import Navbar from './components/navbar';
import Footer from './components/footer';
import { Get, Home, Usage, Faq, Screenshots } from './pages';
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
              <Route path="/get">
                <Get />
              </Route>
              <Route path="/usage">
                <Usage />
              </Route>
              <Route path="/faq">
                <Faq />
              </Route>
              <Route path="/screenshots">
                <Screenshots />
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
