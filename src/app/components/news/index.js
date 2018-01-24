// @flow
import './styles.less';
import React from 'react';

import type {Node} from 'react';

import {Db} from "../../shared/db";
import {baseURL} from "../../shared/baseurl";

const ItemNew = ({date, title, className, onClick}: { date: string, title: string, className: string, onClick: () => void }) => {
    return (
        <li className={className}>
            <section className="news__details" onClick={() => {
                onClick()
            }}>
                <p className="text news__text news__text_data">{date.replace(/\//g, '.')}</p>
                <p className="text news__text news__text_title">{title.replace(/\//g, '.')}</p>
            </section>
        </li>
    )
};

const NewsList = ({news}: { news: Node }) => {
    return (
        <ul className="news__list">{news}</ul>
    )
};

const CurrentNew = ({url, text}: {url: string, text: string}) => {
    return (
        <article className="news__currentNew">
            <div className="news__img"
                 style={{background: 'url(' + url + ') center center / contain no-repeat'}}>
            </div>
            <p className="news__text_text">{text}</p>
        </article>
    )
};

type Props = {}
type StateNews = {
    news: Array<Object>,
    arrayClasses: Array<string>,
    currentNew: {
        title: string,
        date: string,
        text: string,
        image: string
    }
};

export class AppNews extends React.Component<Props, StateNews> {

    state: StateNews;
    currentNewClick: Function;
    intervalId: number;

    constructor() {
        super();
        this.state = {news: [], arrayClasses: [], currentNew: {title: '', date: '', text: '', image: ''}};
        this.currentNewClick = this.currentNewClick.bind(this);
    }

    componentDidMount() {
        this.getList();
        this.startNewsCycle();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    startNewsCycle() {
        this.intervalId = setInterval(() => {
            this.currentNewClick(Math.floor(Math.random() * this.state.news.length))()
        }, 5000)
    }

    currentNewClick(index: number) {
        return () => {
            this.setState({
                arrayClasses: this.state.arrayClasses.map((el, i) =>
                    (index === i) ? el + ' news__details_shown' : 'news__list-item'
                )
            });
            this.setState({currentNew: this.state.news[index]});
            clearInterval(this.intervalId);
            this.startNewsCycle();
        }
    }

    getList() {
        Db.listNews().then((res) => res.json()).then((json) => {
            this.setState({news: json.splice(0, json.length - 5)});
            this.setState({arrayClasses: new Array(json.length).fill("news__list-item")});
            this.currentNewClick(0)();
        })
    }

    render() {
        const news = this.state.news.map((currentNew, i) => {
            return (
                <ItemNew
                    key={currentNew.id}
                    className={this.state.arrayClasses[i]}
                    onClick={this.currentNewClick(i)}
                    date={currentNew.date.replace(/\//g, '.')}
                    title={currentNew.title.replace(/\//g, '.')}
                />
            )
        });
        return (
            <section className="news" id="news">
                <h1 className="news__title">Новости</h1>
                <CurrentNew
                    url={baseURL + this.state.currentNew.image}
                    text={this.state.currentNew.text}
                />
                <NewsList
                    news={news}
                />
            </section>
        )
    }
}

