// @flow
import React from 'react';
import {Db} from "../../shared/db";
import {baseURL} from "../../shared/baseurl";
import type {StateNews} from "../../shared/defType";

type Props = {

}

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
            this.currentNewClick(Math.floor(Math.random()*this.state.news.length))()
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
            this.setState({news: json.splice(0, json.length-5)});
            this.setState({arrayClasses: new Array(json.length).fill("news__list-item")});
            this.currentNewClick(0)();
        })
    }

    render() {
        const news = this.state.news.map((currentNew, i) => {
            return (
                <li key={currentNew.id} className={this.state.arrayClasses[i]}>
                    <section className="news__details" onClick={this.currentNewClick(i)}>
                        <p className="text news__text news__text_data">{currentNew.date.replace(/\//g, '.')}</p>
                        <p className="text news__text news__text_title">{currentNew.title.replace(/\//g, '.')}</p>
                    </section>
                </li>
            )
        });

        return (
            <section className="news" id="news">
                <h1 className="news__title">Новости</h1>
                <article className="news__currentNew">
                    <div className="news__img"
                         style={{background: 'url(' + baseURL + this.state.currentNew.image + ') center center / contain no-repeat'}}>
                    </div>
                    <p className="news__text_text">{this.state.currentNew.text}</p>
                </article>
                <ul className="news__list">{news}</ul>
            </section>
        )
    }
}

