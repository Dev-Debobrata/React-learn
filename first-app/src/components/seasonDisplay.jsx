import React from 'react';
import './seasonDisplay.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr it is chilly' : 'Let\'s hit the beach';
    return (
        <div>
            <h1 className='Sdisplay'>{text}</h1>
        </div>
    );
}

export default SeasonDisplay;
