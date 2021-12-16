import React from 'react';
import './sass/main.scss';
import Header from './components/header'
import Main from './components/main'


function App() {
  const [character, setCharacter] = React.useState('')

  const changeCharacter = (event) => {
    setCharacter(event.target.value)
    //console.log(character)
  }


  return (
    <div className="App">
      <Header character={character} changeCharacter={changeCharacter} />
      <Main character={character} />
    </div>
  );
}

export default App;

