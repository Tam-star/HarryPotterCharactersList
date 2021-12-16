import React from 'react';
import Form from './form';

export default function Header({character, changeCharacter}) {

    return (
        <header>
            <h1>Harry Potter Students</h1>
            <Form character={character} changeCharacter={changeCharacter}></Form>
        </header>
    )
}
