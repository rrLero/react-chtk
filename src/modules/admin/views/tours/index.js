// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as ToursData} from '../../../../controllers/get-tours/typedef';

type OwnProps = {
    data: Array<ToursData>,
    isLoading: boolean
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class AdminToursView extends React.Component<Props, State> {

    render() {
        const {classes, data, isLoading} = this.props;
        const MyLink = props => <NavLink to="/admin/tours/add_new" {...props} />;
        return (
            <div className={classes.page}>
                <Button component={MyLink} className={classes.link}>
                    Add New Tournament Results
                </Button>
                {
                    data ? (
                        data.map(el => {
                            return (
                                <Button
                                    component={props => <NavLink to={`/admin/tours/${el._id.$oid}`} {...props} />}
                                    className={classes.link}
                                    key={`${el._id.$oid}`}>
                                    {el.name}: {el.date}
                                </Button>
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

export default withStyleConnector(AdminToursView);
