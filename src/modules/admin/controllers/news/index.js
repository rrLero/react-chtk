// @flow

import React from 'react';
import {connect} from 'react-redux';

import GetNewsChildrenController from '../../../../controllers/get-news';
import NewsAdminView from '../../views/news';

import {addNew, editNew, removeNew} from '../../services/actions';

import type {Dispatch} from '../../../../store/typedef';
import type {ResponseNew} from '../../services/typedef';

type OwnProps = {

};

type DispatchProps = {
    addNew: (ResponseNew) => (dispatch: Dispatch) => Promise<*>,
    editNew: (ResponseNew) => (dispatch: Dispatch) => Promise<*>,
    removeNew: (ResponseNew) => (dispatch: Dispatch) => Promise<*>
};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class NewsController extends React.Component<Props> {

    render() {
        const {isLoading} = this.props;
        return (
            <GetNewsChildrenController
                view={({data}) => (
                    <NewsAdminView
                        data={data}
                        isLoading={isLoading}
                        addNew={this.props.addNew}
                        editNew={this.props.editNew}
                        removeNew={this.props.removeNew}
                    />
                )}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.admin.isLoading
});

const mapDispatchToProps = {
    addNew,
    removeNew,
    editNew
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewsController);
