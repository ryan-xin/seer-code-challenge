import {Route, HashRouter as Router} from 'react-router-dom';
import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/common/Footer/Footer';
import Blog from './components/pages/Blog/Blog';
import Post from './components/pages/Post/Post';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path={["/", "/blog", "/blog/:pageNum"]} component={Blog} />
        <Route exact path={"/blog/post/:postId"} component={Post} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
