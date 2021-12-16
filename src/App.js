import React from 'react';
import './sass/main.scss';
import Header from './components/header'
import Main from './components/main'


function App() {
  const [character, setCharacter] = React.useState('')
  const [house, setHouse] = React.useState('')

  const changeCharacter = (event) => {
    setCharacter(event.target.value)
  }

  const changeHouse = (event) =>{
    setHouse(event.target.getAttribute('value'))
  }

  return (
    <div className="App">
      <Header character={character} changeCharacter={changeCharacter} changeHouse={changeHouse}/>
      <Main character={character} house={house}/>
    </div>
  );
}

export default App;

