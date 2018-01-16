// @flow
import React from 'react';

import type {StateHeader} from "../../shared/defType";

type Props = {

}

export class AppHeader extends React.Component<Props, StateHeader> {

    navBarHandler: Function;
    state: StateHeader;

    constructor() {
        super();
        this.state = {toggle: true, classHidden: 'header__navigation-bar navigation-bar navigation-bar_hidden'};
        this.navBarHandler = this.navBarHandler.bind(this);
    }

    navBarHandler (event: MouseEvent) {
        event.preventDefault();
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
                        <li className="navigation-bar__nav-item"><a href="#home" className="navigation-bar__nav-link">Home</a></li>
                        <li className="navigation-bar__nav-item"><a href="#" className="navigation-bar__nav-link">About</a></li>
                        <li className="navigation-bar__nav-item"><a href="#courts" className="navigation-bar__nav-link">Courts</a></li>
                        <li className="navigation-bar__nav-item"><a href="#" className="navigation-bar__nav-link">Coaches</a></li>
                        <li className="navigation-bar__nav-item"><a href="#news" className="navigation-bar__nav-link">News</a></li>
                        <li className="navigation-bar__nav-item"><a href="#" className="navigation-bar__nav-link">Partners</a></li>
                    </ul>
                </nav>
                <button id="header__button" className="header__button button " onClick={this.navBarHandler}>
                    <i className="button__icon fa"></i>
                </button>
            </header>
        )
    }
}