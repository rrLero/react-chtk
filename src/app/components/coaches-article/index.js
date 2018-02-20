// @flow
import './styles.less';
import React from 'react';
import Coaches from '../coaches';

type Props = {};

const CoachesArticle = () => {
    return (
        <article className={'coaches-article'} id="coaches">
            <h1 className={'coaches-article__title'}>Наши Тренера</h1>
            <Coaches
                className={'coaches-article__coaches'}
            />
        </article>
    )
};

export default CoachesArticle;