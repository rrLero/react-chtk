// @flow

import './styles.less';
import React from 'react';

type Props = {
    hash: string,
    classItem: string,
    classLink: string,
    text: string,
    isToggle: boolean,
    setToggleMenu: () => void
}

const MenuItem = ({hash, classItem, classLink, text, isToggle, setToggleMenu}: Props) => {
    return (
        <li className={classItem}>
            <a
                href={hash}
                className={classLink}
                onClick={() => {
                    isToggle ? setToggleMenu() : ''
                }}
            >{text}
            </a>
        </li>
    )
};

export default MenuItem;