// @flow
import React from 'react';
import {Db} from "../../shared/db";
import {baseURL} from "../../shared/baseurl";
import type {Props, StateCourts} from "../../shared/defType";

export class AppCourts extends React.Component<Props, StateCourts> {

    state: StateCourts;

    constructor() {
        super();
        this.state = {courts: []};
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        Db.listCourts().then((res) => res.json()).then((json) => {
            this.setState({courts: json})
        })
    }

    render() {
        const courts = this.state.courts.map((court) => {
            return (
                <li className="courts__list-item" key={court.id}>
                    <section className="courts__details">
                        <p className="text text_white">{court.adress}</p>
                        <p className="text text_white courts__details_hidden">{court.description}</p>
                        <p className="text text_white">{court.name}</p>
                        <p className="text text_white">{court.phones}</p>
                        <p className="text text_white">{court.type}</p>
                    </section>
                    <img className="courts__img" src={baseURL + '/static/files/' + court.image}/>
                </li>
            )
        });
        return (
            <section className="courts" id="courts">
                <h1 className="courts__title">Корты нашего клуба</h1>
                <ul className="courts__list">{courts}</ul>
            </section>
        )
    }
}