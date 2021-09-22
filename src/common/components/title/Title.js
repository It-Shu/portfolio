import React from 'react';
import s from './Title.module.css';


function Title(props) {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;