import './App.css';

import Welbert_bg from './resources/wellisonPerfil.jpg';

import MainHeader from './components/Main-Header';
import MainStories from './components/Main-Stories';
import MainPostarFeed from './components/Main-PostarFeed';
import MainFeedPost from './components/Main-FeedPost';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <MainStories/>
      <MainPostarFeed/>
      <MainFeedPost/>
    </div>
  );
}

export default App;
