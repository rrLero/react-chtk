// @flow

import React from 'react';
import {connect} from 'react-redux';

import LoginView from '../../views/login';
import {login} from '../../services/actions';

import type {Node} from 'react';
import type {Dispatcher} from '../../../../store/typedef';

type OwnProps = {
    view: () => Node
};

type DispatchProps = {
    login: (string) => Dispatcher
};

type StateProps = {
    isLogin: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class LoginController extends React.Component<Props> {

    render() {
        const {isLogin, view} = this.props;
        return (
            isLogin ? view() : <LoginView login={this.props.login}/>
        );
    }
}

const mapStateToProps = state => ({
    isLogin: state.admin.isLogin
});

const mapDispatchToProps = {
    login
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(LoginController);
