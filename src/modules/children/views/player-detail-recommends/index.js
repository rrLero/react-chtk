// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import {path} from 'ramda';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
    ratingBorders: Array<number>
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class PlayerDetailsRecommendsView extends React.Component<Props, State> {

    render() {
        const {classes, ratingBorders} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={'subheading'} className={classes.title}>
                    РЕКОМЕНДУЕТСЯ УЧАСТИЕ
                </Typography>
                <Divider/>
                <div className={classes.type}>
                    <Typography variant={'body1'} className={classes.typeTitle}>
                        Категория:
                    </Typography>
                    <Typography
                        variant={'subheading'}
                        className={classes.typeText}>
                        {`от ${path(['0'])(ratingBorders)} до ${path(['1'])(ratingBorders)}`}
                    </Typography>
                </div>

            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(PlayerDetailsRecommendsView);
