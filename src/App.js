import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/main.scss'
import CovidTracker from './pages/CovidTracker';
import AboutCovid from './pages/AboutCovid';
import CoronaProvider from './contexts/provider/CoronaProvider';

function App() {

  return (
    <CoronaProvider>
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={CovidTracker}/>
            <Route exact path='/about' component={AboutCovid}/>
          </Switch>
        <Footer />
      </Router>
    </CoronaProvider>
  );

}

export default App;
