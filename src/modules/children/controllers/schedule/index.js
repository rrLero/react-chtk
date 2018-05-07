// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getSchedule} from '../../../admin/services/actions';
import {getDataCalendar} from '../../services/actions';

import ScheduleView from '../../views/schedule';
import type {ScheduleGoogleItem} from '../../services/typedef';


type OwnProps = {};

type DispatchProps = {
    getSchedule: () => void,
    getDataCalendar: (?Date) => void
};

type StateProps = {
    data: Array<{
        courts: Array<Array<string>>,
        time: string
    }>,
    scheduleGoogle: Array<ScheduleGoogleItem>,
    qnt: number
};

type Props = DispatchProps & StateProps & OwnProps;

export class ScheduleController extends React.Component<Props> {

    componentDidMount() {
        this.props.getSchedule();
        this.props.getDataCalendar();
    }

    render() {
        const {data, scheduleGoogle, qnt} = this.props;
        return (
            data ? (
                <ScheduleView
                    tournament={data}
                    time={'2018-04-29'}
                    scheduleGoogle={scheduleGoogle}
                    qnt={qnt}
                />
            ) : null
        );
    }
}

const mapStateToProps = state => ({
    data: state.admin.schedule,
    scheduleGoogle: state.rating.schedule,
    qnt: state.rating.qnt
});

const mapDispatchToProps = {
    getSchedule,
    getDataCalendar
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(ScheduleController));
