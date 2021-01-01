import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import axios from 'axios';
import request from 'request';

import './App.css';
// import LoadingBar from './components/loading-bar/LoadingBar';
import LoadingBar from 'react-top-loading-bar'

// const one = new Promise((rs, rj) => {
//   request.get('https://reading-list1.herokuapp.com/player/', (err, httpResponse, body) => {
//     if(err) rj(err.message);
//     rs(body.result)
//   })
// })

const state = {
  one: 1,
  two: 2,
  three: 3,
  // ref: useRef(null)
}
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/topics'>Topics</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/home'>
              <Home grate={{one:1}}/>
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/topics'>
              <Topics />
            </Route>  
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = (props) => {
  return <div className="App">
    <LoadingBar color='yellow' ref={state.ref} />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.{1}{props.grate.one}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {/* state.ref.current.complete() */}
      {/* (state.ref.current.continuousStart)() */}
      <button onClick={() => {
        state.ref.current.staticStart()
      }}>Complete</button>
      <button onClick={() => state.ref.current.complete()}>
        Start Continuous Loading Bar
    </button>
    </header>
  </div>
}

const About = () => {
  return <h2>about</h2>
}

const Users = () => {
  return <h2>Users</h2>
}

const Topics = class one extends React.Component {
  state = {
    persons: [],
    players: []
  }
  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
      axios.get(`https://reading-list1.herokuapp.com/player/`)
      .then(res => {
        const persons = res.data.result;
        this.setState({ persons });
      }).catch(err => this.setState({ persons: err.message }))  
    // request.get('https://reading-list1.herokuapp.com/player/', (err, body) => {
    //   this.setState({ oneaaa: JSON.stringify(body) || err.message });
    // })
        
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  }
  async one() {
    // return ["1"]
    try {
      let result = await axios.get('https://reading-list1.herokuapp.com/player/')
      console.log(result.data);
    } catch (err) {
      console.log(err.message);
    }
    // result.data[0].firstname;  
    // return 1;
    // .then(res => {
    //     console.log(res);
    //     const players = res.data[0];
    //     this.setState({ players })
    //   })  
  }

  render() {
    return(
      <div>
        <ul>
          {/* { this.state.persons.map(person => <li>{person.firstname}</li>)} */}
        </ul>
          {/* { this.state.players.map(player => <li>{player.firstname}</li>) } */}
          { this.state.persons }
        
      </div>
    )
  }
}