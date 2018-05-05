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
import type {Data as CoachesData} from '../../../../controllers/get-coaches/typedef';
import type {ApiDispatcher} from '../../../../store/typedef';
import type {Coach} from './typedef';

type OwnProps = {
    coach: CoachesData,
    actionCoach: (State) => ApiDispatcher,
    removeCoach?: (State) => ApiDispatcher
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = Coach;

type Props = OwnProps & WithProps;

class CoachDetailView extends React.Component<Props, State> {

    state = {
        name: this.props.coach.name,
        lastName: this.props.coach.lastName,
        avatarUrl: this.props.coach.avatarUrl,
        id: this.props.coach._id.$oid
    };

    handleChange = (name: string, val?: string) => event => {
        this.setState({
            [name]: val ? val : event.target.value
        });
    };

    render() {
        const {classes, coach} = this.props;
        const {name, lastName, avatarUrl} = this.state;
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
                    label={'avatarUrl'}
                    className={classes.textField}
                    value={avatarUrl}
                    onChange={this.handleChange('avatarUrl')}
                    margin="normal"
                />
                {!coach._id.$oid ? (
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        className={classes.button}
                        mini={true}
                        onClick={() => this.props.actionCoach(this.state)}>
                        <AddIcon />
                    </Button>
                ) : null}
                {coach._id.$oid ? (
                    <Fragment>
                        <Button
                            variant="fab"
                            aria-label="edit"
                            className={classes.button}
                            mini={true}
                            onClick={() => this.props.actionCoach(this.state)}>
                            <EditIcon/>
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="delete"
                            className={classes.button}
                            mini={true}
                            onClick={() => this.props.removeCoach && this.props.removeCoach(this.state)}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                ) : null}
            </form>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(CoachDetailView);
