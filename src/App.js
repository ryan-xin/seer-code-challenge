import './App.css';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Post from './components/Post';

function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:postId" component={Post} />
        <hr />
        <Footer />
      </Router>
    </>
  );
}

export default App;
