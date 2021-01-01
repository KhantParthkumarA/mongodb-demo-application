import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const one = async () => {
  return await (await axios.get('https://reading-list1.herokuapp.com/player/')).data.result
}
console.log(one)

/*
<React.Suspense fallback={<Spinner size="large" />}>
  <ArtistDetails id={this.props.id}/>
  <ArtistTopTracks />
  <ArtistAlbums id={this.props.id}/>
</React.Suspense>*/
ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={1111}>
    	<App great={{one:"1", two:"twooooo"}} din={1212122121212} />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
