import React from 'react';
import Card from './card'
import getStudentsByName from '../APIfunctions';
import { getStudentsFilteredByHouse } from '../APIfunctions';


export default function Main({ character, house }) {
    const [results, setResults] = React.useState([])

    React.useEffect(() => {
        getStudentsByName(character).then((response) => {
            setResults(response)
        })
    }, [character])


    return (
        <main>
            <h2>{character!=='' ? `Results for ${character}` : ''} {house!== '' ?  ` in ${house}` : ''}</h2>
            <article className='cards-block'>
                {house !== '' ? getStudentsFilteredByHouse(results, house).map(studentData => (
                    <Card key={studentData.name} name={studentData.name} house={studentData.house} gender={studentData.gender} dob={studentData.dateOfBirth} imgSrc={studentData.image} />
                )) :  results.map(studentData => (
                    <Card key={studentData.name} name={studentData.name} house={studentData.house} gender={studentData.gender} dob={studentData.dateOfBirth} imgSrc={studentData.image} />
                ))}
               
            </article>
        </main>
    )
}

