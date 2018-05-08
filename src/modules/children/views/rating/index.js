// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';

import RatingTabsView from '../rating-tabs';

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

class RatingView extends React.Component<Props, State> {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.page}>
                <Typography variant={'display3'} className={classes.title}>
                    Рейтинг
                </Typography>
                <RatingTabsView/>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(RatingView);
