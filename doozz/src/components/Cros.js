import React from 'react';
import './svg.css';
const Cros = () => {
    return (
        <svg width="100" height="100" viewBox='-50 -50 100 100' className="cros">
            <line x1="-40" y1="-40" x2="40" y2="40"/>
            <line x1="-40" y1="40" x2="40" y2="-40"/>
        </svg>
    );
};

export default Cros;