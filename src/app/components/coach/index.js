// @flow
import './styles.less';
import React from 'react';

type Props = {image: string, name: string, className: string, tel: string};

const Coach = ({image, name, className, tel}: Props) => {
    return (
        <li className={className + " coach"}>
            <img src={require('./'+ image )} className="coach__image" alt="coach"/>
            <a href="#coaches" onClick={(e) => e.preventDefault()}>
                <section className="coach__team-shadow-overlay">
                    <section className="coach__team-shadow-overlay-inner">
                        <h4 className="coach__name">{name}</h4>
                        <h4 className="coach__name">{tel}</h4>
                    </section>
                </section>
            </a>

        </li>
    )
};

export default Coach;