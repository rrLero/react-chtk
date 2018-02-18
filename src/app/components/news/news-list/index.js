// @flow
import './styles.less';
import React from 'react';

import ItemNew from '../item-new';
import type {OneNew} from "../../../../typedef";

type Props = {
    news: Array<OneNew>,
    activeNew: OneNew,
    setActiveNew: (number) => void,
    timerId: number
}

const NewsList = ({news, activeNew, setActiveNew, timerId}: Props) => {
    return (
        <ul className="news-list">
            {news.map((currentNew, i) => {
                return (
                    <ItemNew
                        key={currentNew.id}
                        className={currentNew.id !== activeNew.id}
                        onClick={()  => {setActiveNew(currentNew); clearInterval(timerId)}}
                        date={currentNew.date.replace(/\//g, '.')}
                        title={currentNew.title.replace(/\//g, '.')}
                    />
                )
            })}
        </ul>
    )
};

export default NewsList;