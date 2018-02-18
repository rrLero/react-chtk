// @flow
import './styles.less';
import React from 'react';

type Props = {
    date: string,
    title: string,
    className: boolean,
    onClick: () => void
}

const ItemNew = ({date, title, className, onClick}: Props) => {
    return (
        <li className={className ? 'list-item ' : 'list-item news-details_shown'}>
            <section className="news-details" onClick={onClick}>
                <p className="text news-details__text">{date.replace(/\//g, '.')}</p>
                <p className="text news-details__text">{title.replace(/\//g, '.')}</p>
            </section>
        </li>
    )
};

export default ItemNew;