// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import CoachDetailView from '../../views/coach-detail';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as CoachesData} from '../../../../controllers/get-coaches/typedef';
import type {ApiDispatcher} from '../../../../store/typedef';
import type {Coach} from '../coach-detail/typedef';

type OwnProps = {
    data: Array<CoachesData>,
    editCoach: (Coach) => ApiDispatcher,
    addCoach: (Coach) => ApiDispatcher,
    removeCoach: (Coach) => ApiDispatcher,
    isLoading: boolean
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class AdminCoachesView extends React.Component<Props, State> {

    render() {
        const {classes, data, editCoach, addCoach, removeCoach, isLoading} = this.props;

        return (
            <div className={classes.page}>
                {
                    data ? (
                        <Paper className={classes.root}>
                            <CoachDetailView
                                coach={{
                                    _id: {
                                        $oid: ''
                                    },
                                    name: '',
                                    lastName: '',
                                    avatarUrl: ''
                                }}
                                coaches={data}
                                actionCoach={addCoach}
                            />
                        </Paper>
                    ) : null
                }
                {
                    data ? (
                        data.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)).map((el, i) => {
                            return (
                                <Paper key={el._id.$oid} className={classes.root}>
                                    <Badge badgeContent={i + 1} color="primary">
                                        <CoachDetailView
                                            coach={el}
                                            actionCoach={editCoach}
                                            removeCoach={removeCoach}
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

export default withStyleConnector(AdminCoachesView);
