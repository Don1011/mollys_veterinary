import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Footer from './components/presentational/Footer';

const App = () => {
  return (
    <div className = "App">
      <Router>
        <Switch>
          <Route path = {['/', '/home']} exact>
            <Home />
          </Route>
          <Route path = '/about' exact>
            <About />
          </Route>
          <Route path = '/contact' exact>
            <Contact />
          </Route>
          <Route path = '*' >
            <NotFound />
          </Route>
        </Switch>
      </Router>
      
      <Footer />
    </div>
  )
}


export default App
