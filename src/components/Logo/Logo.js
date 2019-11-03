import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face31.png';

const Logo = () => {
    return (
        <div className='center moveFront ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{ paddingTop: '5px' }} alt='logo' src={face} /></div>
            </Tilt>
        </div>
    );
};

export default Logo;
