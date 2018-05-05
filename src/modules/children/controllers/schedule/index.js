// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getSchedule} from '../../../admin/services/actions';

import type {WithStyleConnector} from "../../../../typedef";

import ScheduleView from '../../views/schedule';


type OwnProps = {

};

type DispatchProps = {
    getSchedule: () => void
};

type StateProps = {
    data: Array<{
        courts: Array<Array<string>>,
        time: string
    }>
};

type Props = DispatchProps & StateProps & OwnProps;

export class ScheduleController extends React.Component<Props> {

    componentDidMount() {
        this.props.getSchedule()
    }

    render() {
        const {data} = this.props;
        return (
            data ? (
                <ScheduleView
                    tournament={data}
                    time={'2018-04-29'}
                />
            ) : null
        )
    }
}

const mapStateToProps = state => ({
    data: state.admin.schedule
});

const mapDispatchToProps = {
    getSchedule
};

const connector: WithStyleConnector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(ScheduleController));
