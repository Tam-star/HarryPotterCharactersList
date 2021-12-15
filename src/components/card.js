import React from 'react';

export default function Card({name, house, gender, dob}) {
    const alternativeText = `Photography of ${name}`
    return (
        <article className='card'> 
            <img src='http://hp-api.herokuapp.com/images/harry.jpg' className='card__img' alt={alternativeText} ></img>
            <h3><span className='bold-text'>Name :</span> {name}</h3>
            <p><span className='bold-text'>House :</span> {house}</p>
            <p><span className='bold-text'>Gender : </span>{gender}</p>
            <p><span className='bold-text'>DOB : </span>{dob} </p>
        </article>
    )
}
