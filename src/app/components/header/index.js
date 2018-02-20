// @flow

import './styles.less';
import React from 'react';
import {connect} from "react-redux";
import {setToggleMenu} from "./actions";

const NavButton = ({onClick, toggle}: {onClick: () => void, toggle: boolean}) => {
    return (
        <button id="header__button" className="header__button button " onClick={(event: MouseEvent) => {
            event.preventDefault();
            onClick()
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36">
                <path
                    id="first"
                    d='M4,4 L20,4 C20,4 22,6 20,8 L4,8 C4,8 2,6 4,4z'
                    fill="white"
                    transform={toggle ? 'rotate(45 5 5) scale(1.2 1)' : ''}
                >
                </path>
                <path
                    id="second"
                    d='M4,12 L20,12 C20,12 22,14 20,16 L4,16 C4,16 2,14 4,12z'
                    fill="white"
                    transform={toggle ? 'scale(0)' : ''}
                >
                </path>
                <path
                    id="third"
                    d="M4,20 L20,20 C20,20 22,22 20,24 L4,24 C4,24 2,22 4,20z"
                    fill="white"
                    transform= {toggle ? 'rotate(-45 2 20) scale(1.2 1)' : ''}
                >
                </path>
            </svg>
        </button>
    )
};

type MenuItemProps = {
    hash: string,
    classItem: string,
    classLink: string,
    text: string,
    isToggle: boolean,
    setToggleMenu: () => void
}

const MenuItem = ({hash, classItem, classLink, text, isToggle, setToggleMenu}: MenuItemProps) => {
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

type Props = {
    isToggle: boolean,
    setToggleMenu: () => void
}

const AppHeader = ({isToggle, setToggleMenu}: Props) => {

    const classHidden = isToggle ? 'header__navigation-bar navigation-bar' : 'header__navigation-bar navigation-bar navigation-bar_hidden';
    return (
        <header className="header main__header">
            <aside className="header__main-logo main-logo">
                <img src="" className="main-logo__image"/>
            </aside>
            <nav className={classHidden} id="navigation-bar">
                <ul className={isToggle ? "navigation-bar__nav-list isToggle" : "navigation-bar__nav-list"} >
                    <MenuItem
                        hash={'#home'}
                        classItem={"navigation-bar__nav-item"}
                        classLink={"navigation-bar__nav-link"}
                        text={'Home'}
                        setToggleMenu={setToggleMenu}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#courts'}
                        classItem={"navigation-bar__nav-item"}
                        classLink={"navigation-bar__nav-link"}
                        text={'Courts'}
                        setToggleMenu={setToggleMenu}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#news'}
                        classItem={"navigation-bar__nav-item"}
                        classLink={"navigation-bar__nav-link"}
                        text={'News'}
                        setToggleMenu={setToggleMenu}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#coaches'}
                        classItem={"navigation-bar__nav-item"}
                        classLink={"navigation-bar__nav-link"}
                        text={'Coaches'}
                        setToggleMenu={setToggleMenu}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#partners'}
                        classItem={"navigation-bar__nav-item"}
                        classLink={"navigation-bar__nav-link"}
                        text={'Partners'}
                        setToggleMenu={setToggleMenu}
                        isToggle={isToggle}
                    />
                </ul>
            </nav>
            <NavButton
                onClick = {setToggleMenu}
                toggle = {isToggle}
            />
        </header>
    )
};

export default connect(state => ({
    isToggle: state.toggleMenu.isToggle,

}), {
    setToggleMenu
})(AppHeader);
