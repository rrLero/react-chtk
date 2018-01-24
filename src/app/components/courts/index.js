// @flow
import './styles.less';
import React from 'react';

import {Db} from "../../shared/db";
import {baseURL} from "../../shared/baseurl";

type Props = {};
type StateCourts = {
    courts: Array<{ [key: string]: string }>
};

const OneCourt = ({address, name, phones, type, description, imageUrl}: {address: string, name: string, phones: string, type: string, description: string, imageUrl: string}) => {
    return (
        <li className="courts__list-item">
            <section className="courts__details">
                <p className="text text_white">{address}</p>
                <p className="text text_white courts__details_hidden">{description}</p>
                <p className="text text_white">{name}</p>
                <p className="text text_white">{phones}</p>
                <p className="text text_white">{type}</p>
            </section>
            <img className="courts__img" src={imageUrl}/>
        </li>
    )
};

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
        return (
            <section className="courts" id="courts">
                <h1 className="courts__title">Корты нашего клуба</h1>
                <ul className="courts__list">
                    {
                        this.state.courts.map((court) => {
                            return (
                                <OneCourt
                                    key={court.id}
                                    address={court.address}
                                    description={court.description}
                                    name={court.name}
                                    phones={court.phones}
                                    type={court.type}
                                    imageUrl={baseURL + '/static/files/' + court.image}
                                />
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}