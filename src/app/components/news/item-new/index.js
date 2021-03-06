// @flow
import './styles.less';
import React from 'react';

type Props = {
    date: string,
    title: string,
    className: boolean,
    setActiveNew: () => void
}

const ItemNew = ({date, title, className, setActiveNew}: Props) => {
    return (
        <li className={className ? 'list-item ' : 'list-item news-details_shown'}>
            <section className="news-details" onClick={setActiveNew}>
                <p className="news-details__text news-details__text_data">{date.replace(/\//g, '.')}</p>
                <p className="news-details__text">{title.replace(/\//g, '.')}</p>
            </section>
        </li>
    )
};

export default ItemNew;