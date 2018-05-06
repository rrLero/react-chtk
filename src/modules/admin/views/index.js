// @flow

import React from 'react';

import AppBarAdmin from './app-bar';
import LoginController from '../controllers/login';

import type {Node} from 'react';

type OwnProps = {
    children: Node
};

type WithProps = {

};

type State = {

};

type Props = OwnProps & WithProps;

class AdminView extends React.Component<Props, State> {

    render() {
        const {children} = this.props;
        return (
            <AppBarAdmin>
                <LoginController
                    view={() => children}
                />
            </AppBarAdmin>
        );
    }
}

export default AdminView;
