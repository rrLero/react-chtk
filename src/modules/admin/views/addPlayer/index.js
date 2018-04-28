// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class AdminAddPlayerView extends React.Component<Props, State> {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.page}>
                AddPlayer

            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(AdminAddPlayerView);
