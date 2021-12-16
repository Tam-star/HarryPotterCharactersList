import React from 'react';

export default function HouseMenu({ handleFilterMenu, changeHouse }) {


    return (
        <ul className="filters__menu" onClick={handleFilterMenu}>
            <HouseFilter style={{ backgroundColor: 'red' }} house='Gryffindor' changeHouse={changeHouse} />
            <HouseFilter style={{ backgroundColor: 'yellow' }} house='Hufflepuff' changeHouse={changeHouse} />
            <HouseFilter style={{ backgroundColor: 'blue' }} house='Ravenclaw' changeHouse={changeHouse} />
            <HouseFilter style={{ backgroundColor: 'green' }} house='Slytherin' changeHouse={changeHouse} />
        </ul>
    )
}


function HouseFilter({ house, style, changeHouse }) {
    return (
        <li className='filters__menu__house' style={style} value={house} onClick={changeHouse}>{house}</li>
    )
}
