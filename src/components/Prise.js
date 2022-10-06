import {priseElement} from '../utils/prise.js';
import React from "react";

function Prise(props) {
    React.useEffect(() => {
        props.openPage();
        props.editPrise(true)
    }, []);

    return (
        <div className='prise'>
            {priseElement.map((el) => {
                return (
                    <div className='prise__point'>
                        <h2 className='prise__point-name'>{el.name}</h2>
                        <h3 className='prise__point-cash'>{el.cash}</h3>
                    </div>)
            })}
        </div>
    )
}

export default Prise;