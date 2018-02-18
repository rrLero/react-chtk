// @flow
import './styles.less';
import React from 'react';
import type {OneNew} from "../../../../typedef";
import {baseURL} from "../../../shared/baseurl";

type Props = {
    activeNew: OneNew,
}

const CurrentNew = ({activeNew}: Props) => {
    return (
        activeNew.image ? (
                <article className="current-new">
                    <div className="current-new__img"
                         style={{background: 'url(' + baseURL + activeNew.image + ') center center / contain no-repeat'}}>
                    </div>
                    <p className="current-new__text">{activeNew.text}</p>
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
