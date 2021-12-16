import React from 'react';
import Card from './card'
import getStudentsByName from '../APIfunctions';

let dataStudents = []



export default function Main({ character }) {
    //const [data, setData] = React.useState([])
    const [results, setResults] = React.useState([])

    React.useEffect(() => {
        console.log('changed')
        getStudentsByName(character).then((response) => {
            setResults(response)
        })
    }, [character])


    return (
        <main>
            <h2>Results for : {character}</h2>
            <article className='cards-block'>
                {results.map(studentData => (
                    <Card key={studentData.name} name={studentData.name} house={studentData.house} gender={studentData.gender} dob={studentData.dateOfBirth} imgSrc={studentData.image}/> 
                    // <EmojiResultRow
                    //     key={emojiData.title}
                    //     symbol={emojiData.symbol}
                    //     title={emojiData.title}
                    // />
                ))}
                {/* <Card name='Harry Potter' house='Gryffindor' gender='male' dob='31-07-1980' /> */}
            </article>
        </main>
    )
}

