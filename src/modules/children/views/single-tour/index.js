// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter, NavLink} from 'react-router-dom';
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemText} from 'material-ui/List';
import AvatarMat from 'material-ui/Avatar';
import Avatar from '../../../../components/avatar';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as TourData} from '../../../../controllers/get-tours/typedef';
import type {Data as PlayerData} from '../../../../controllers/get-players/typedef';

type OwnProps = {
    tour: TourData,
    players: Array<PlayerData>
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class SingleTourView extends React.Component<Props, State> {

    render() {
        const {classes, tour, players} = this.props;
        const filteredPlayers = players
            .filter(player => !!tour[player._id.$oid])
            .map(player => ({
                ...player,
                place: tour[player._id.$oid]
            }))
            .sort((a, b) => a.place - b.place);
        return (
            <Paper className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="primary" className={classes.title}>
                            {tour.name}
                        </Typography>
                        <Typography variant="subheading" className={classes.date}>
                            Дата: {tour.date}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List className={classes.list}>
                    {filteredPlayers.map(player => (
                        <ListItem className={classes.listItem} key={player._id.$oid}>
                            <AvatarMat className={player.place < 4 ? classes.orangeAvatar : classes.purpleAvatar}>
                                {player.place}
                            </AvatarMat>
                            <Avatar
                                alt="Avatar"
                                src={player.avatarUrl}
                                size={'sm'}
                            />
                            <ListItemText
                                primary={
                                    <NavLink
                                        to={`/children/players/${player._id.$oid}`}
                                        className={classNames(classes.link)}>
                                        {`${player.name} ${player.lastName}`}
                                    </NavLink>}
                                secondary={`${player.year}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(SingleTourView));
