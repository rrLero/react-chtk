// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import PlayerDetailView from '../../views/plyer-detail';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as PlayersData} from '../../../../controllers/get-players/typedef';
import type {Data as CoachesData} from '../../../../controllers/get-coaches/typedef';
import type {ApiDispatcher} from '../../../../store/typedef';
import type {Player} from '../plyer-detail/typedef';

type OwnProps = {
    playersData: Array<PlayersData>,
    coachesData: Array<CoachesData>,
    editPlayer: (Player) => ApiDispatcher,
    addPlayer: (Player) => ApiDispatcher,
    removePlayer: (Player) => ApiDispatcher,
    isLoading: boolean
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class PlayersView extends React.Component<Props, State> {

    render() {
        const {classes, playersData, coachesData, editPlayer, addPlayer, removePlayer, isLoading} = this.props;

        return (
            <div className={classes.page}>
                {
                    coachesData ? (
                        <Paper className={classes.root}>
                            <PlayerDetailView
                                player={{
                                    _id: {
                                        $oid: ''
                                    },
                                    name: '',
                                    lastName: '',
                                    coach: {
                                        id: ''
                                    },
                                    avatarUrl: '',
                                    year: -1
                                }}
                                coaches={coachesData}
                                actionPlayer={addPlayer}
                            />
                        </Paper>
                    ) : null
                }
                {
                    playersData && coachesData ? (
                        playersData.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)).map((el, i) => {
                            return (
                                <Paper key={el._id.$oid} className={classes.root}>
                                    <Badge badgeContent={i + 1} color="primary">
                                        <PlayerDetailView
                                            player={el}
                                            coaches={coachesData}
                                            actionPlayer={editPlayer}
                                            removePlayer={removePlayer}
                                        />
                                    </Badge>
                                </Paper>
                            );
                        })
                    ) : null
                }
                <Modal open={!!isLoading}>
                    <div className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            ...Wait
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(PlayersView);
