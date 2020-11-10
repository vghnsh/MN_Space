
import './App.css';
import {Requests} from './Requests';
import PlayList from '../src/Components/PlayList/Playlist.component';
import Count from '../src/Components/Count/Count.component';
import Pvideo from './Components/PVideo/Pvideo.component';
import Videopage from './Components/VideoPage/Videopage.component';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Search from '../src/Components/Search/Search.component';
import Head from '../src/Components/Head/Head.component';

function App() {
  return (
    <div className="App">
      

          <Router>
            <Switch>

            <Route exact path="/">
              <Head></Head>
              <Count fetchUrl={Requests.Count}/>
              <Search/>
              <PlayList fetchUrl={Requests.PlayList}/>
            </Route>
          
            <Route path="/Pvideo">
            <Head></Head>
              <Pvideo />
            </Route>

            <Route  path="/videoPg">
            <Head></Head>
              <Videopage/>
            </Route>
         
        </Switch>
        </Router>
       
    </div>
  );
}

export default App;
