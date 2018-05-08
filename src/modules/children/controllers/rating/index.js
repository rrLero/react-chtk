// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RatingView from '../../views/rating';

type OwnProps = {

};

type DispatchProps = {

};

type StateProps = {

};

type Props = DispatchProps & StateProps & OwnProps;

export class RatingController extends React.Component<Props> {

    render() {
        return (
            <RatingView/>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(RatingController));
