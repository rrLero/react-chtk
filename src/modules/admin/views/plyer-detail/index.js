// @flow

import React, {Fragment} from 'react';
import {withStyles} from 'material-ui/styles';

import styles from './styles';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as PlayersData} from '../../../../controllers/get-players/typedef';
import type {Data as CoachesData} from '../../../../controllers/get-coaches/typedef';
import type {ApiDispatcher} from '../../../../store/typedef';
import type {Player} from './typedef';

type OwnProps = {
    player: PlayersData,
    coaches: Array<CoachesData>,
    actionPlayer: (State) => ApiDispatcher,
    removePlayer?: (State) => ApiDispatcher
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = Player;

type Props = OwnProps & WithProps;

class PlayerDetailView extends React.Component<Props, State> {

    state = {
        coach: this.props.player.coach.id,
        name: this.props.player.name,
        lastName: this.props.player.lastName,
        year: +this.props.player.year,
        avatarUrl: this.props.player.avatarUrl,
        id: this.props.player._id.$oid
    };

    handleChange = (name: string, val?: string) => event => {
        this.setState({
            [name]: val ? val : event.target.value
        });
    };

    render() {
        const {classes, player, coaches} = this.props;
        const {name, lastName, avatarUrl, coach, year} = this.state;
        return (
            <form className={classes.container}>
                <TextField
                    label={'lastName'}
                    className={classes.textField}
                    value={lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                />
                <TextField
                    label={'name'}
                    className={classes.textField}
                    value={name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    label={'coach'}
                    select={true}
                    className={classes.textField}
                    value={coach}
                    onChange={this.handleChange('coach')}
                    margin="normal"
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu
                        }
                    }}>
                    <option value={''}>
                        {''}
                    </option>
                    {coaches.map(person => (
                        <option key={person._id.$oid} value={person._id.$oid}>
                            {`${(person && person.lastName) || ''} ${(person && person.name) || ''}`}
                        </option>
                    ))}
                </TextField>
                <TextField
                    label={'year'}
                    className={classes.textField}
                    value={year}
                    onChange={this.handleChange('year')}
                    margin="normal"
                />
                <TextField
                    label={'avatarUrl'}
                    className={classes.textField}
                    value={avatarUrl}
                    onChange={this.handleChange('avatarUrl')}
                    margin="normal"
                />
                {!player._id.$oid ? (
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        className={classes.button}
                        mini={true}
                        onClick={() => this.props.actionPlayer(this.state)}>
                        <AddIcon />
                    </Button>
                ) : null}
                {player._id.$oid ? (
                    <Fragment>
                        <Button
                            variant="fab"
                            aria-label="edit"
                            className={classes.button}
                            mini={true}
                            onClick={() => this.props.actionPlayer(this.state)}>
                            <EditIcon/>
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="delete"
                            className={classes.button}
                            mini={true}
                            onClick={() => this.props.removePlayer && this.props.removePlayer(this.state)}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                ) : null}
            </form>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(PlayerDetailView);
