import React from 'react';
import Card from './card'

let dataStudents = []



export default function Main({character}) {
    //const [data, setData] = React.useState([])
    React.useEffect(() => {
        console.log('changed')
    }, [character])

    // const url = 'http://hp-api.herokuapp.com/api/characters/students';
    // const options = {
    //     method: 'GET'
    // }

    // fetch(url, options)
    //     .then(reponse => reponse.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.log("Something is wrong : ", err))

    return (
        <main>
            <h2>Results for : {character}</h2>
            <article className='cards-block'>
                <Card name='Harry Potter' house='Gryffindor' gender='male' dob='31-07-1980' />
                <Card name='Harry Potter' house='Gryffindor' gender='male' dob='31-07-1980' />
                <Card name='Harry Potter' house='Gryffindor' gender='male' dob='31-07-1980' />
                <Card name='Harry Potter' house='Gryffindor' gender='male' dob='31-07-1980' />
                <Card name='Harry Potter' house='Gryffindor' gender='male' dob='31-07-1980' />
            </article>
        </main>
    )
}

