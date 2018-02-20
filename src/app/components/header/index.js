// @flow

import './styles.less';
import React from 'react';
import {connect} from "react-redux";
import {setToggleMenu} from "./actions";
import NavButton from './nav-button';
import MenuItem from './menu-item';


type Props = {
    isToggle: boolean,
    setToggleMenu: () => void
}

const AppHeader = ({isToggle, setToggleMenu}: Props) => {
    const classHidden = isToggle ? 'header__navigation-bar navigation-bar' : 'header__navigation-bar navigation-bar navigation-bar_hidden';
    return (
        <header className="header main__header">
            <aside className="header__main-logo main-logo">
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
