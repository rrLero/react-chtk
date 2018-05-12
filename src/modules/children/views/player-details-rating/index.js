// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import AvatarMat from 'material-ui/Avatar';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
    ratingBorders: Array<number>,
    currentRating: number,
    points: number
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class PlayerDetailsRatingView extends React.Component<Props, State> {

    render() {
        const {classes, ratingBorders, currentRating, points} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={'subheading'} className={classes.title}>
                    РЕЙТИНГ
                </Typography>
                <div className={classes.type}>
                    <Typography variant={'body1'} className={classes.typeTitle}>
                        Категория:
                    </Typography>
                    <Typography variant={'subheading'} className={classes.typeText}>
                        {`от ${ratingBorders[0]} до ${ratingBorders[1]}`}
                    </Typography>
                </div>
                <div className={classes.type}>
                    <Typography variant={'body1'} className={classes.typeTitle}>
                        Позиция:
                    </Typography>
                    <AvatarMat className={classes.avatar}>
                        {currentRating}
                    </AvatarMat>
                </div>
                <div className={classes.type}>
                    <Typography variant={'body1'} className={classes.typeTitle}>
                        Очки:
                    </Typography>
                    <Typography variant={'subheading'} className={classes.typeText}>
                        {points}
                    </Typography>
                </div>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(PlayerDetailsRatingView);
