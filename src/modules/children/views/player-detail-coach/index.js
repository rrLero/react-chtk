// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';

import Avatar from '../../../../components/avatar';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
    name: string,
    lastName: string,
    avatarUrl: string
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class PlayerDetailsCoachView extends React.Component<Props, State> {

    render() {
        const {classes, name, lastName, avatarUrl} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={'subheading'} className={classes.title}>
                    ТРЕНЕР
                </Typography>
                <div className={classes.type}>
                    <Avatar
                        alt={name}
                        src={avatarUrl}
                        size={'sm'}
                    />
                    <Typography variant={'body1'} className={classes.typeTitle}>
                        {`${name || '[empty]'} ${lastName || '[empty]'}`}
                    </Typography>
                </div>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(PlayerDetailsCoachView);
