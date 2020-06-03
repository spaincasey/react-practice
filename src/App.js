import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//WITHOUT USING HOOKS. YOU EXTEND COMPONENT AND USE THIS.SETSTATE
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0] = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ] 
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!') }>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2 ].age}
        />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;

/****************************************** 
//USING HOOKS. YOU USE USESTATE() AND YOU SIMPLY RETURN INSTEAD OF RENDER
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0] = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximo', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ] 
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2 ].age}
      />
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Hi, I\'m a React App!!!!'));
}

export default app;
******************************************/