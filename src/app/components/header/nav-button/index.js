// @flow

import './styles.less';
import React from 'react';
import type {Dispatch} from '../../../../store/typedef';

type Props = {
    onClick: () => (dispatch: Dispatch) => Promise<*>,
    toggle: boolean
};

const NavButton = ({onClick, toggle}: Props) => {
    return (
        <button id="header__button" className="header__button button " onClick={(event: MouseEvent) => {
            event.preventDefault();
            onClick();
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36">
                <path
                    id="first"
                    d="M4,4 L20,4 C20,4 22,6 20,8 L4,8 C4,8 2,6 4,4z"
                    fill="white"
                    className={toggle ? 'button__svg button__svg_first toggle' : 'button__svg button__svg_first'}
                />
                <path
                    id="second"
                    d="M4,12 L20,12 C20,12 22,14 20,16 L4,16 C4,16 2,14 4,12z"
                    fill="white"
                    className={toggle ? 'button__svg button__svg_second toggle' : 'button__svg button__svg_second'}
                />
                <path
                    id="third"
                    d="M4,20 L20,20 C20,20 22,22 20,24 L4,24 C4,24 2,22 4,20z"
                    fill="white"
                    className={toggle ? 'button__svg button__svg_third toggle' : 'button__svg button__svg_third'}
                />
            </svg>
        </button>
    );
};

export default NavButton;
