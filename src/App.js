import './App.css';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Post from './components/Post';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:postId" component={Post} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
