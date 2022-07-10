import './App.css';

import {useState, useEffect} from 'react';

import Welbert_bg from './resources/wellisonPerfil.jpg';

import MainHeader from './components/Main-Header';
import MainStories from './components/Main-Stories';
import MainPostarFeed from './components/Main-PostarFeed';
import MainFeedPost from './components/Main-FeedPost';

import {db} from './firebase';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(function(doc){
        return {info: doc.data()}
      }));
    })
  }, [])

  return (
    <div className="App">

      <MainHeader/>     
      <MainStories/>
      <MainPostarFeed/>
      {
        posts.map(function(val){
          return ( <MainFeedPost nome={val.info.nome} conteudo={val.info.conteudo} horario="20:00:00"/> )
        })
      }

    </div>
  );
}

export default App;
