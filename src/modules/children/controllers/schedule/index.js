// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getDataCalendar} from '../../services/actions';

import ScheduleView from '../../views/schedule';
import Spinner from 'material-ui/Progress/CircularProgress';

import type {ScheduleGoogleItem} from '../../services/typedef';


type OwnProps = {};

type DispatchProps = {
    getSchedule: () => void,
    getDataCalendar: (?Date) => void
};

type StateProps = {
    scheduleGoogle: Array<ScheduleGoogleItem>,
    qnt: number,
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class ScheduleController extends React.Component<Props> {

    componentDidMount() {
        this.props.getDataCalendar();
    }

    render() {
        const {scheduleGoogle, qnt, isLoading} = this.props;
        return (
            !scheduleGoogle ? isLoading ? <Spinner/> : null : (
                <ScheduleView
                    scheduleGoogle={scheduleGoogle}
                    qnt={qnt}
                    getDataCalendar={this.props.getDataCalendar}
                />
            )
        );
    }
}

const mapStateToProps = state => ({
    scheduleGoogle: state.rating.schedule,
    qnt: state.rating.qnt,
    isLoading: state.rating.isLoading
});

const mapDispatchToProps = {
    getDataCalendar
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(ScheduleController));
