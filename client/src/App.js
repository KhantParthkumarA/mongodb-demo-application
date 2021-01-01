import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  // https://jsonplaceholder.typicode.com/users
  // https://reading-list1.herokuapp.com/player/
  // http://ergast.com/api/f1/2004/1/results.json
  componentDidMount() {
    axios.get('https://reading-list1.herokuapp.com/player/')
    .then(res => {
      this.setState({ persons: JSON.stringify(res.data, null, 4) });
      // response.send(res.data.result[0]);
    })
    .catch(err => {
      // response.status(400).send(err.message);
    })
    // axios.get(`https://reading-list1.herokuapp.com/`)
    //   .then(res => {

    //     const persons = JSON.stringify(res.data.result, null, 4);
    //     this.setState({ persons: typeof persons || "one" });
    //   }).catch(err => {
    //     console.log(err)
    //     this.setState({ persons: err.message });
    //   })
  }

  render() {
    return (
      <ul>
        <li>{ this.state.persons }</li>
        {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
      </ul>
    )
  }
}