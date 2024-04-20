import React from 'react';
import '../style/Boxcar.scss';

function Boxcar({ imagecar, lettercar, textcar }) {
    return (
        <div className='box' style={{backgroundImage: `url(${imagecar})`}}>
            <div>
                <p className='letter'>{lettercar}</p>
                <p className='text'>{textcar}</p>
            </div>
        </div>
    );
}


export default Boxcar;