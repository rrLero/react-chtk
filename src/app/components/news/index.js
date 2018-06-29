// @flow
import './styles.less';
import React from 'react';

import {getNews, setActiveNew, changeActiveNew, turnOffTimer} from './actions';
import {connect} from 'react-redux';
import NewsList from './news-list';
import CurrentNew from './current-new';

import type {OneNew} from '../../../typedef';
import type {Dispatch} from '../../../store/typedef';

type DispatchProps = {
    setActiveNew: (oneNew: OneNew) => (dispatch: Dispatch) => Promise<*>,
    getNews: () => (dispatch: Dispatch) => Promise<*>,
    changeActiveNew: () => (dispatch: Dispatch) => Promise<*>,
    turnOffTimer: () => (dispatch: Dispatch) => Promise<*>
};

type StateProps = {
    news: Array<OneNew>,
    activeNew: OneNew,
    isTimerOn: boolean
};

type Props = DispatchProps & StateProps

class AppNews extends React.Component<Props> {

    timerId: IntervalID;

    componentDidMount() {
        this.props.getNews();
        this.timerId = setInterval(() => {
            this.props.changeActiveNew();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleClick = (oneNew: OneNew) => {
        const {isTimerOn} = this.props;
        this.props.setActiveNew(oneNew);
        clearInterval(this.timerId);
        if (isTimerOn) {
            this.props.turnOffTimer();
        }
    };

    render() {
        const {news, activeNew, isTimerOn} = this.props;
        return (
            <section className="news" id="news">
                <h1 className="news__title">Новости</h1>
                <NewsList
                    news={news}
                    activeNew={activeNew}
                    setActiveNew={this.handleClick}
                />
                <CurrentNew
                    activeNew={activeNew}
                    isTimerOn={isTimerOn}
                    turnOffTimer={this.props.turnOffTimer}
                    timerId={this.timerId}
                />
            </section>
        );
    }
}

export default connect(state => ({
    news: state.news.news,
    activeNew: state.news.activeNew,
    isTimerOn: state.news.isTimerOn
}), {
    getNews,
    setActiveNew,
    changeActiveNew,
    turnOffTimer
})(AppNews);

