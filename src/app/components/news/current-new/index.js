// @flow
import './styles.less';
import React from 'react';
import {baseURL} from '../../../shared/baseurl';

import type {OneNew} from '../../../../typedef';
import type {Dispatch} from '../../../../store/typedef';

type Props = {
    activeNew: OneNew,
    isTimerOn: boolean,
    turnOffTimer: () => (dispatch: Dispatch) => Promise<*>,
    timerId: IntervalID
};

const CurrentNew = ({activeNew, isTimerOn, turnOffTimer, timerId}: Props) => {

    return activeNew ? (
        activeNew.image ? (
            <article className="current-new">
                <div className="current-new__img"
                    style={{background: 'url(' + baseURL + activeNew.image + ') center center / contain no-repeat'}}
                    onClick={() => {
                        if (isTimerOn) {
                            turnOffTimer();
                            clearInterval(timerId);
                        }
                    }}
                />
                <p className={isTimerOn ? 'current-new__text' : 'current-new__text current-new__text_open'}>
                    {activeNew.text}
                </p>
            </article>
        ) : (
            <article className="current-new">
                <div className="current-new__img" style={{background: 'none center center / contain no-repeat'}}/>
                <p className="current-new__text">No New</p>
            </article>
        )
    ) : null;
};

export default CurrentNew;
