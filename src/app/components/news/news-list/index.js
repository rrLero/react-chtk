// @flow
import './styles.less';
import React from 'react';

import ItemNew from '../item-new';
import type {OneNew} from "../../../../typedef";

type Props = {
    news: Array<OneNew>,
    activeNew: OneNew,
    setActiveNew: (OneNew) => void;
}

const NewsList = ({news, activeNew, setActiveNew}: Props) => {
    return (
        <ul className="news-list">
            {news.map((currentNew, i) => {
                return (
                    <ItemNew
                        key={currentNew.id}
                        className={currentNew.id !== activeNew.id}
                        setActiveNew={() => {setActiveNew(currentNew)}}
                        date={currentNew.date.replace(/\//g, '.')}
                        title={currentNew.title.replace(/\//g, '.')}
                    />
                )
            })}
        </ul>
    )
};

export default NewsList;