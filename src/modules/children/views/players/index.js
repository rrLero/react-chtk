// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';

import Typography from 'material-ui/Typography';
import AutoSelect from '../../../../components/auto-select';
import SinglePlayer from '../../views/single-player';

import styles from './styles';

import type {Data as PlayerData} from '../../../../controllers/get-players/typedef';
import type {Data as CoachData} from '../../../../controllers/get-coaches/typedef';
import type {Data as TourData} from '../../../../controllers/get-tours/typedef';
import type {Match, RouterHistory} from 'react-router-dom';


type OwnProps = {
    player: PlayerData,
    coach: CoachData,
    tours: Array<TourData>,
    ageBorders: Array<number>,
    age: number,
    suggestions: Array<{value: number, label: string}>,
    id: string | typeof undefined,
    match: Match,
    history: RouterHistory,
    currentRating: number,
    borders: Array<number>
};

type WithProps = {
    classes: $Call<typeof styles>
};

type Props = OwnProps & WithProps;

class PlayersView extends React.Component<Props> {

    onSelect = val => {
        if (val) {
            this.props.history.push(`/children/players/${val}`);
        } else {
            this.props.history.push('/children/players');
        }
    };

    getChoosePlayerSection = (id: string | typeof undefined) => {
        if (id === 'rand') {
            return null;
        }
        const {classes, suggestions} = this.props;
        return (
            <div className={classes.chooseTour}>
                <Typography variant={'subheading'} className={''} color={'primary'}>
                    Выберите игрока
                </Typography>
                <AutoSelect
                    suggestions={suggestions}
                    value={id || ''}
                    onSelect={this.onSelect}
                />
            </div>
        );
    };

    render() {
        const {classes, player, id, ...rest} = this.props;
        return (
            <div className={classes.root}>
                {this.getChoosePlayerSection(id)}
                {player ? (
                    <SinglePlayer
                        player={player}
                        id={id}
                        {...rest}
                    />
                ) : (
                    <Typography variant={'display3'} color={'primary'} className={classes.title}>
                       Выберите Игрока
                    </Typography>
                )}
            </div>
        );
    }
}

const withStyleConnector = withStyles(styles);

export default withRouter(withStyleConnector(PlayersView));
