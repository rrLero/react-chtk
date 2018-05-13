// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Spinner from 'material-ui/Progress/CircularProgress';

import NewsView from '../../views/news';
import GetNewsController from '../../../../controllers/get-news';

type OwnProps = {

};

type DispatchProps = {

};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class NewsController extends React.Component<Props> {

    render() {
        const {isLoading} = this.props;
        return (
            <GetNewsController
                view={({data}) => (
                    !data ? isLoading ? <Spinner size={100}/> : null : (
                        <NewsView
                            news={data.sort((a, b) => (a.date < b.date ? -1 : 1))}
                        />
                    )
                )}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.admin.isLoading
});

const mapDispatchToProps = {

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(NewsController));
