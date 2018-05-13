// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import NewDetailView from '../../views/new-detail';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {ResponseNew} from '../../services/typedef';
import type {ApiDispatcher} from '../../../../store/typedef';

type OwnProps = {
    data: Array<ResponseNew>,
    isLoading: boolean,
    addNew: (ResponseNew) => ApiDispatcher,
    editNew: (ResponseNew) => ApiDispatcher,
    removeNew: (ResponseNew) => ApiDispatcher
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class NewsView extends React.Component<Props, State> {

    render() {
        const {classes, data, isLoading, addNew, editNew, removeNew} = this.props;

        return (
            <div className={classes.page}>
                {
                    data ? (
                        <Paper className={classes.root}>
                            <NewDetailView
                                oneNew={{
                                    _id: {
                                        $oid: ''
                                    },
                                    title: '',
                                    date: '',
                                    links: '',
                                    text: '',
                                    imageUrl: ''
                                }}
                                actionNew={addNew}
                            />
                        </Paper>
                    ) : null
                }
                {
                    data ? (
                        data.map((el, i) => {
                            return (
                                <Paper key={el._id.$oid} className={classes.root}>
                                    <Badge badgeContent={i + 1} color="primary">
                                        <NewDetailView
                                            oneNew={el}
                                            actionNew={editNew}
                                            removeNew={removeNew}
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

export default withStyleConnector(NewsView);
