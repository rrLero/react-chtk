// @flow

import './styles.less';
import React from 'react';
import type {Dispatch} from '../../../../store/typedef';

type Props = {
    hash: string,
    classItem: string,
    classLink: string,
    text: string,
    isToggle: boolean,
    setToggleMenu: () => (dispatch: Dispatch) => Promise<*>
};

const MenuItem = ({hash, classItem, classLink, text, isToggle, setToggleMenu}: Props) => {
    return (
        <li className={classItem}>
            <a
                href={hash}
                className={classLink}
                onClick={() => (isToggle ? setToggleMenu() : a => a)}>
                {text}
            </a>
        </li>
    );
};

export default MenuItem;
