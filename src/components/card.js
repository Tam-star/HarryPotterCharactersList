import React from 'react';
import unknownImg from '../assets/unknown_student.jpg';

export default function Card({name, house, gender, dob, imgSrc}) {
    const alternativeText = `Photography of ${name}`
    return (
        <article className='card'> 
            <img src={imgSrc!=='' ? imgSrc : unknownImg} className='card__img' alt={alternativeText} ></img>
            <h3><span className='bold-text'>Name :</span> {name}</h3>
            <p className='card__text'><span className='bold-text'>House :</span> {house}</p>
            <p className='card__text'><span className='bold-text'>Gender : </span>{gender}</p>
            <p className='card__text'><span className='bold-text'>Date Of Birth : </span>{dob!== '' ? dob : 'unknown'} </p>
        </article>
    )
}
