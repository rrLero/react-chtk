// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';

import AppBarChildren from './app-bar';

import styles from './styles';

import type {WithStyleConnector} from '../../../typedef';
import type {Node} from 'react';

type OwnProps = {
    children: Node
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class ChildrenView extends React.Component<Props, State> {

    render() {
        const {classes, children} = this.props;
        return (
            <AppBarChildren>
                {children}
            </AppBarChildren>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(ChildrenView));
