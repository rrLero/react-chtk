// @flow
import './styles.less';
import React from 'react';
import type {OneNew} from "../../../../typedef";
import {baseURL} from "../../../shared/baseurl";
import {turnOffTimer} from "../actions";

type Props = {
    activeNew: OneNew,
    isTimerOn: boolean,
    turnOffTimer: () => void,
    timerId: number
}

const CurrentNew = ({activeNew, isTimerOn, turnOffTimer, timerId}: Props) => {

    return (
        activeNew.image ? (
            <article className="current-new">
                <div className="current-new__img"
                     style={{background: 'url(' + baseURL + activeNew.image + ') center center / contain no-repeat'}}
                     onClick={() => {
                         if (isTimerOn) {
                             turnOffTimer();
                             clearInterval(timerId)
                         }
                     }}
                >
                </div>
                <p className={isTimerOn ? "current-new__text" : "current-new__text " + "current-new__text_open"}>{activeNew.text}</p>
            </article>
        ) : (
            <article className="current-new">
                <div className="current-new__img"
                     style={{background: 'none center center / contain no-repeat'}}>
                </div>
                <p className="current-new__text">No New</p>
            </article>
        )
    )
};

export default CurrentNew;
