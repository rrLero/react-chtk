// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from '../../../../components/avatar';

import PlayerDetailRatingView from '../player-details-rating';
import PlayerDetailCoachView from '../player-detail-coach';
import PlayerDetailToursView from '../player-detail-tours';
import PlayerDetailRecommendsView from '../player-detail-recommends';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as TourData} from '../../../../controllers/get-tours/typedef';
import type {Data as PlayerData} from '../../../../controllers/get-players/typedef';
import type {Data as CoachesData} from '../../../../controllers/get-coaches/typedef';

type OwnProps = {
    tours: Array<TourData>,
    player: PlayerData,
    currentRating: number,
    coach: CoachesData,
    age: number,
    id: string,
    ratingBorders: Array<number>,
    points: number
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class SinglePlayerView extends React.Component<Props, State> {

    render() {
        const {classes, player, coach, currentRating, ratingBorders, points, tours} = this.props;
        return (
            <Paper className={classes.root}>
                <AppBar position="static" classes={{colorDefault: classes.color}} color={'default'}>
                    <Toolbar>
                        <Typography variant="title" color="primary" className={classes.title}>
                            {`${player.name} ${player.lastName}`}
                        </Typography>
                        <Typography variant="subheading" className={classes.date}>
                            Год: {player.year}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.list}>
                    <div className={classes.avatarZone}>
                        <Avatar
                            alt={player.name}
                            src={player.avatarUrl}
                            size={'xl'}
                            className={classes.avatar}
                        />
                    </div>
                    <div className={classes.container}>
                        <PlayerDetailRatingView
                            currentRating={currentRating}
                            ratingBorders={ratingBorders}
                            points={points}
                        />
                    </div>
                    <div className={classes.container}>
                        <PlayerDetailCoachView
                            name={coach && coach.name}
                            lastName={coach && coach.lastName}
                            avatarUrl={coach && coach.avatarUrl}
                        />
                    </div>
                    <div className={classes.container}>
                        <PlayerDetailToursView
                            tours={tours || []}
                        />
                    </div>
                    <div className={classes.container}>
                        <PlayerDetailRecommendsView
                            ratingBorders={ratingBorders || []}
                        />
                    </div>
                </div>
            </Paper>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(SinglePlayerView));
