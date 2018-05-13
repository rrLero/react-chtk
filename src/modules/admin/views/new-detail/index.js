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
import type {ApiDispatcher} from '../../../../store/typedef';
import type {ResponseNew} from '../../services/typedef';

type OwnProps = {
    oneNew: ResponseNew,
    actionNew: (State) => ApiDispatcher,
    removeNew?: (State) => ApiDispatcher
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = ResponseNew;

type Props = OwnProps & WithProps;

class NewDetailView extends React.Component<Props, State> {

    state = {
        title: this.props.oneNew.title,
        text: this.props.oneNew.text,
        date: this.props.oneNew.date,
        links: this.props.oneNew.links,
        imageUrl: this.props.oneNew.imageUrl,
        _id: {
            $oid: this.props.oneNew._id.$oid
        }
    };

    handleChange = (name: string, val?: string) => event => {
        this.setState({
            [name]: val ? val : event.target.value
        });
    };

    render() {
        const {classes, oneNew} = this.props;
        const {title, text, links, date, imageUrl} = this.state;
        return (
            <form className={classes.container}>
                <TextField
                    label={'title'}
                    className={classes.textField}
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                />
                <TextField
                    label={'text'}
                    className={classes.textField}
                    value={text}
                    onChange={this.handleChange('text')}
                    margin="normal"
                    multiline={true}
                />
                <TextField
                    label={'imageUrl'}
                    className={classes.textField}
                    value={imageUrl}
                    onChange={this.handleChange('imageUrl')}
                    margin="normal"
                />
                <TextField
                    label={'links'}
                    className={classes.textField}
                    value={links}
                    onChange={this.handleChange('links')}
                    margin="normal"
                />
                <TextField
                    label={'date'}
                    className={classes.textField}
                    value={date}
                    onChange={this.handleChange('date')}
                    margin="normal"
                    type="date"
                />
                {!oneNew._id.$oid ? (
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        className={classes.button}
                        mini={true}
                        onClick={() => this.props.actionNew(this.state)}>
                        <AddIcon />
                    </Button>
                ) : null}
                {oneNew._id.$oid ? (
                    <Fragment>
                        <Button
                            variant="fab"
                            aria-label="edit"
                            className={classes.button}
                            mini={true}
                            onClick={() => this.props.actionNew(this.state)}>
                            <EditIcon/>
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="delete"
                            className={classes.button}
                            mini={true}
                            onClick={() => this.props.removeNew && this.props.removeNew(this.state)}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                ) : null}
            </form>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(NewDetailView);
