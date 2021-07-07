import { BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Articles from './pages/articles';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      {/* Routes go here */}
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/articles">
          <Articles/>
        </Route>
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
