// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Dispatcher} from '../../../../store/typedef';

type OwnProps = {
    login: (string) => Dispatcher
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {
    pass: string
};

type Props = OwnProps & WithProps;

class LoginView extends React.Component<Props, State> {

    handleChange = () => (event: MouseEvent) => {
        if (event.target instanceof HTMLInputElement) {
            this.setState({
                pass: event.target.value
            });
        }
    };

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange()}
                />
                <Button variant="raised" color="primary" onClick={() => this.props.login(this.state.pass)}>
                    Login
                </Button>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(LoginView);
