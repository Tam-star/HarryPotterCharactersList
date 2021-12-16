import React from 'react';
import Form from './form';
import HouseMenu from './housemenu';

export default function Header({ character, changeCharacter , changeHouse}) {

    const[showMenu, setShowMenu] = React.useState(false)

    const handleFilterMenu = () =>{
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <h1>Harry Potter Students</h1>
            <Form character={character} changeCharacter={changeCharacter}></Form>
            <div className='filters'>
                <button className='filters__button' onClick={handleFilterMenu}>Filter by house </button>
                {showMenu ? <HouseMenu handleFilterMenu={handleFilterMenu} changeHouse={changeHouse}></HouseMenu> : null}
            </div>
            <button className='clear-button' value='' onClick={changeHouse}>Clear Filter</button>

        </header>
    )
}
