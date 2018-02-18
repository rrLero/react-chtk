// @flow

import './styles.less';
import React from 'react';

const NavButton = ({onClick}: {onClick: () => void}) => {
    return (
        <button id="header__button" className="header__button button " onClick={(event: MouseEvent) => {
            event.preventDefault();
            onClick()
        }}>
            <i className="button__icon fa"></i>
        </button>
    )
};

const MenuItem = ({hash, classItem, classLink, text}: {hash: string, classItem: string, classLink: string, text: string}) => {
    return (
        <li className={classItem}><a href={hash} className={classLink}>{text}</a></li>
    )
};

type StateHeader = {
    toggle: boolean,
    classHidden: string
};
type Props = {}

class AppHeader extends React.Component<Props, StateHeader> {

    navBarHandler: Function;
    state: StateHeader;

    constructor() {
        super();
        this.state = {toggle: true, classHidden: 'header__navigation-bar navigation-bar navigation-bar_hidden'};
        this.navBarHandler = this.navBarHandler.bind(this);
    }

    navBarHandler () {
        if (this.state.toggle) {
            this.setState({classHidden: 'header__navigation-bar navigation-bar'});
        } else {
            this.setState({classHidden: 'header__navigation-bar navigation-bar navigation-bar_hidden'});
        }
        this.setState({toggle:!this.state.toggle})
    };

    render() {
        return (
            <header className="header main__header">
                <aside className="header__main-logo main-logo">
                    <img src="" className="main-logo__image"/>
                </aside>
                <nav className={this.state.classHidden} id="navigation-bar" data-toggle={this.state.toggle}>
                    <ul className="navigation-bar__nav-list " >
                        <MenuItem
                            hash={'#home'}
                            classItem={"navigation-bar__nav-item"}
                            classLink={"navigation-bar__nav-link"}
                            text={'Home'}
                        />
                        <MenuItem
                            hash={'#courts'}
                            classItem={"navigation-bar__nav-item"}
                            classLink={"navigation-bar__nav-link"}
                            text={'Courts'}
                        />
                        <MenuItem
                            hash={'#news'}
                            classItem={"navigation-bar__nav-item"}
                            classLink={"navigation-bar__nav-link"}
                            text={'News'}
                        />
                    </ul>
                </nav>
                <NavButton
                    onClick = {this.navBarHandler}
                />
            </header>
        )
    }
}

export default AppHeader;