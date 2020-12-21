import {Route, HashRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        {/* <Route exact path={["/", "/blog", "/blog/:pageNum"]} component={Blog} />
        <Route exact path="/blog/post/:postId" component={Post} /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
