// @flow

import './styles.less';
import React from 'react';
import {connect} from 'react-redux';
import {setToggleMenu} from './actions';
import NavButton from './nav-button';
import MenuItem from './menu-item';
import {NavLink} from 'react-router-dom';
import type {Dispatch} from '../../../store/typedef';

type Props = {
    isToggle: boolean,
    setToggleMenu: () => (dispatch: Dispatch) => Promise<*>
};

const AppHeader = ({isToggle, setToggleMenu: setToggle}: Props) => {
    const classHidden = isToggle ?
        'header__navigation-bar navigation-bar' : 'header__navigation-bar navigation-bar navigation-bar_hidden';
    return (
        <header className="header main__header">
            <aside className="header__main-logo main-logo"/>
            <nav className={classHidden} id="navigation-bar">
                <ul className={isToggle ? 'navigation-bar__nav-list isToggle' : 'navigation-bar__nav-list'}>
                    <NavLink
                        to={'/children'}
                        className={'padding-link navigation-bar__nav-link navigation-bar__nav-item'}>
                        ДЕТИ
                    </NavLink>
                    <NavLink
                        to={'/children/schedule'}
                        className={'padding-link navigation-bar__nav-link navigation-bar__nav-item'}>
                        РАСПИСАНИЕ
                    </NavLink>
                    <MenuItem
                        hash={'#home'}
                        classItem={'navigation-bar__nav-item'}
                        classLink={'navigation-bar__nav-link'}
                        text={'ГЛАВНАЯ'}
                        setToggleMenu={setToggle}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#courts'}
                        classItem={'navigation-bar__nav-item'}
                        classLink={'navigation-bar__nav-link'}
                        text={'КОРТЫ'}
                        setToggleMenu={setToggle}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#news'}
                        classItem={'navigation-bar__nav-item'}
                        classLink={'navigation-bar__nav-link'}
                        text={'НОВОСТИ'}
                        setToggleMenu={setToggle}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#coaches'}
                        classItem={'navigation-bar__nav-item'}
                        classLink={'navigation-bar__nav-link'}
                        text={'ТРЕНЕРА'}
                        setToggleMenu={setToggle}
                        isToggle={isToggle}
                    />
                    <MenuItem
                        hash={'#partners'}
                        classItem={'navigation-bar__nav-item'}
                        classLink={'navigation-bar__nav-link'}
                        text={'ПАРТНЕРЫ'}
                        setToggleMenu={setToggle}
                        isToggle={isToggle}
                    />
                </ul>
            </nav>
            <NavButton
                onClick={setToggleMenu}
                toggle={isToggle}
            />
        </header>
    );
};

export default connect(state => ({
    isToggle: state.toggleMenu.isToggle
}), {
    setToggleMenu
})(AppHeader);
