// @flow

import React from 'react';
import {MenuItem} from 'material-ui/Menu';

import type {Node} from 'react';

type OwnProps = {
    onSelect: (string, Event) => void,
    option: string,
    children: Node,
    isFocused: boolean,
    isSelected: boolean,
    onFocus: () => void
};

type Props = OwnProps;

class Option extends React.Component<Props> {

    handleClick = (event: Event) => {
        this.props.onSelect(this.props.option, event);
    };

    render() {
        const {children, isFocused, isSelected, onFocus} = this.props;

        return (
            <MenuItem
                onFocus={onFocus}
                selected={isFocused}
                onClick={this.handleClick}
                component="div"
                style={{fontWeight: isSelected ? 500 : 400}}>
                {children}
            </MenuItem>
        );
    }
}

export default Option;
