// @flow
import './styles.less';
import React from 'react';

import type {Node} from 'react';

import type {OneNew} from "../../../typedef";
import {getNews, setActiveNew, changeActiveNew, turnOffTimer} from "./actions";
import {connect} from "react-redux";
import NewsList from './news-list';
import CurrentNew from './current-new';

type DispatchProps = {
    setActiveNew: (id: number) => void,
    getNews: () => Array<OneNew>,
    changeActiveNew: () => void,
    turnOffTimer: () => void,
}

type StateProps = {
    news: Array<OneNew>,
    activeNew: number,
    isTimerOn: boolean
}

type Props = DispatchProps & StateProps

class AppNews extends React.Component<Props> {

    timerId: number;

    componentDidMount() {
        const {getNews, changeActiveNew} = this.props;
        getNews();
        this.timerId = setInterval(() => {
            changeActiveNew()
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    handleClick = (oneNew: OneNew) => {
        const {setActiveNew, isTimerOn, turnOffTimer} = this.props;
        setActiveNew(oneNew);
        clearInterval(this.timerId);
        isTimerOn ? turnOffTimer() : null
    };

    render() {
        const {news, activeNew, isTimerOn, turnOffTimer} = this.props;
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
                    turnOffTimer={turnOffTimer}
                    timerId={this.timerId}
                />
            </section>
        )
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

