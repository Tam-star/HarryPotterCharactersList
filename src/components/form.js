import React from 'react';

export default function Form({character, changeCharacter}) {


    return (
        <form className='search'>
            <label htmlFor="name" className='search__label'>Find the character you are looking for : </label>
            <input type="text" name="name" className='search__input' id="name" value={character} onChange={changeCharacter} />
        </form>
    )
}
