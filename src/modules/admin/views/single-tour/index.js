// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';

import styles from './styles';

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import Button from 'material-ui/Button';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as TourData} from '../../../../controllers/get-tours/typedef';
import type {Data as PlayersData} from '../../../../controllers/get-players/typedef';
import type {ResponseTour} from '../../services/typedef';
import type {Match, RouterHistory} from 'react-router-dom';
import type {ApiDispatcher} from '../../../../store/typedef';

type OwnProps = {
    tour: TourData | null,
    players: Array<PlayersData>,
    addTour: (ResponseTour) => ApiDispatcher,
    editTour: (ResponseTour) => ApiDispatcher,
    removeTour: (ResponseTour) => ApiDispatcher,
    match: Match,
    history: RouterHistory
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {
    tour: TourData,
    newSign: {
        id: string,
        value: number
    }
};

type Props = OwnProps & WithProps;

class AdminSingleTourView extends React.Component<Props, State> {

    state = {
        tour: this.props.tour || {
            _id: {$oid: ''},
            name: 'Input New Name Here',
            date: ''
        },
        newSign: {
            id: '',
            value: -1
        }
    };

    handleChange = (name: string) => event => {
        const val = event.target.value;
        this.setState({
            tour: {
                ...this.state.tour,
                [name]: isNaN(+val) ? val : +val
            }
        });
    };

    handleChangeNewId = () => event => {
        this.setState({
            newSign: {
                id: event.target.value,
                value: this.state.newSign.value
            }
        });
    };

    handleChangeNewValue = () => event => {
        const val = event.target.value;
        this.setState({
            newSign: {
                id: this.state.newSign.id,
                value: isNaN(+val) ? val : +val
            }
        });
    };

    getPlayerName = (id: string) => {
        const player = this.props.players.find(el => el._id.$oid === id);
        return player ? `${player.lastName} ${player.name}` : null;
    };

    addNew = () => {
        this.setState({
            tour: {
                ...this.state.tour,
                [this.state.newSign.id]: this.state.newSign.value
            },
            newSign: {
                id: '',
                value: -1
            }
        });
    };

    update = () => {
        this.props.editTour(this.state.tour);
    };

    removeTour = () => {
        this.props.removeTour(this.state.tour).then(res => {
            if (res.response) {
                this.props.history.push('/admin/tours');
            }
        });
    };

    addNewTour = () => {
        this.props.addTour(this.state.tour).then(res => {
            if (res.response) {
                this.props.history.push(`/admin/tours/${res.response._id.$oid}`);
            }
        });

    };

    removeSet = (id: string) => {
        const {[id]: deleted, ...rest} = this.state.tour;
        this.setState({
            tour: rest
        });
    };

    render() {
        const {classes, players} = this.props;
        const {tour} = this.state;
        if (tour) {
            const {date, _id, name, ...rest} = tour;
            const keys = Object.keys(rest);
            return (
                <form className={classes.container}>
                    <Button
                        variant="raised"
                        color="primary"
                        className={classes.update}
                        onClick={!this.state.tour._id.$oid ? this.addNewTour : this.update}>
                        {!this.state.tour._id.$oid ? 'Add New' : 'Update'}
                    </Button>
                    {this.state.tour._id.$oid ? (
                        <Button
                            variant="raised"
                            color="primary"
                            className={classes.update}
                            onClick={this.removeTour}>
                            Delete
                        </Button>
                    ) : null}
                    <Paper className={classes.editZone}>
                        <TextField
                            label={'date'}
                            className={classes.textField}
                            value={date}
                            onChange={this.handleChange('date')}
                            margin="normal"
                        />
                    </Paper>
                    <Paper className={classes.editZone}>
                        <TextField
                            label={'name'}
                            className={classes.textField}
                            value={name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </Paper>
                    <Paper className={classes.editZone}>
                        <TextField
                            label={'new name'}
                            select={true}
                            className={classes.textField}
                            onChange={this.handleChangeNewId()}
                            value={this.state.newSign.id}
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
                            {players.filter(el => {
                                return !this.state.tour[el._id.$oid];
                            }).map(person => (
                                <option key={person._id.$oid} value={person._id.$oid}>
                                    {`${(person && person.lastName) || ''} ${(person && person.name) || ''}`}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            label={'new place'}
                            className={classes.textField}
                            value={this.state.newSign.value}
                            onChange={this.handleChangeNewValue()}
                            margin="normal"
                        />
                        <Button
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            mini={true}
                            onClick={this.addNew}>
                            <AddIcon />
                        </Button>
                    </Paper>
                    {keys.map(key => (
                        <Paper key={key} className={classes.editZone}>
                            <Typography>
                                {this.getPlayerName(key)}
                            </Typography>
                            <TextField
                                label={'place'}
                                className={classes.textField}
                                value={rest[key]}
                                onChange={this.handleChange(key)}
                                margin="normal"
                            />
                            <Button
                                variant="fab"
                                color="primary"
                                aria-label="remove"
                                mini={true}
                                onClick={() => this.removeSet(key)}>
                                <DeleteIcon />
                            </Button>
                        </Paper>
                    ))}
                </form>
            );
        } else {
            return null;
        }
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(AdminSingleTourView));