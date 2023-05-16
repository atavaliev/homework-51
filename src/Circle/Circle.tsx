import React from 'react';
import './Circle.css'

interface PropsCircle {
    number:number
}

const Circle:React.FC<PropsCircle> = ({number}) => {
    return (
        <div className="circle">
            {number}
        </div>
    );
};

export default Circle;