// @flow

import './styles.less';
import React from 'react';
import type {Court} from "../../../typedef";

type Props = Court;

const OneCourt = ({address, name, phones, type, description, imageUrl}: Props) => {
    return (
        <li className="courts__list-item">
            <section className="courts__details">
                <p className="text text_white text_margin">{address}</p>
                <p className="text text_white text_margin courts__details_hidden">{description}</p>
                <p className="text text_white text_margin">{name}</p>
                <p className="text text_white text_margin">{phones}</p>
                <p className="text text_white text_margin">{type}</p>
            </section>
            <img className="courts__img" src={imageUrl}/>
        </li>
    )
};

export default OneCourt;