// @flow
import './styles.less';
import React from 'react';

import type {Node} from 'react';

import type {OneNew} from "../../../typedef";
import {getNews, setActiveNew, changeActiveNew} from "./actions";
import {connect} from "react-redux";
import NewsList from './news-list';
import CurrentNew from './current-new';

type DispatchProps = {
    setActiveNew: (id: number) => void,
    getNews: () => Array<OneNew>,
    changeActiveNew: () => void
}

type StateProps = {
    news: Array<OneNew>,
    activeNew: number,
}

type Props = DispatchProps & StateProps

class AppNews extends React.Component<Props> {

    timerId: number;

    componentDidMount() {
        const {getNews, changeActiveNew, news, activeNew} = this.props;
        getNews();
        const temp = activeNew;
        this.timerId = setInterval(() => {
            changeActiveNew()
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        const {news, activeNew, setActiveNew} = this.props;
        return (
            <section className="news" id="news">
                <h1 className="news__title">Новости</h1>
                <NewsList
                    news={news}
                    activeNew={activeNew}
                    setActiveNew={setActiveNew}
                    timerId={this.timerId}
                />
                <CurrentNew
                    activeNew={activeNew}
                />
            </section>
        )
    }
}

export default connect(state => ({
    news: state.news.news,
    activeNew: state.news.activeNew
}), {
    getNews,
    setActiveNew,
    changeActiveNew
})(AppNews);

