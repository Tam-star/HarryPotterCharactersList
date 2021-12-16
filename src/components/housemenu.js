import React from 'react';

export default function HouseMenu({ handleFilterMenu }) {


    return (
        <ul className="filters__menu" onClick={handleFilterMenu}>
            <HouseFilter style={{ backgroundColor: 'red' }} house='Gryffindor' />
            <HouseFilter style={{ backgroundColor: 'yellow' }} house='Hufflepuff' />
            <HouseFilter style={{ backgroundColor: 'blue' }} house='Ravenclaw' />
            <HouseFilter style={{ backgroundColor: 'green' }} house='Slytherin' />
        </ul>
    )
}


function HouseFilter({ house, style }) {
    return (
        <li className='filters__menu__house' style={style}>{house}</li>
    )
}
