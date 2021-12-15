import React from 'react';
import Card from './card'


export default function Main() {
    return (
        <main>
            <h2>RESULTS</h2>
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

