// @flow
import './styles.less';
import React from 'react';

import OneCourt from '../one-court';
import type {Court} from "../../../typedef";
import {connect} from "react-redux";
import {getCourts} from "./actions";

type StateProps = {
    courts: Array<Court>
};

type DispatchProps = {
    getCourts: () => void
}

type Props = StateProps & DispatchProps;

class AppCourts extends React.Component<Props> {

    componentDidMount() {
        const {getCourts} = this.props;
        getCourts();
    }

    render() {
        const {courts} = this.props;
        return (
            <section className="courts" id="courts">
                <h1 className="courts__title">Корты нашего клуба</h1>
                <ul className="courts__list">
                    {courts.map((court) => {
                        return (
                            <OneCourt
                                key={court.id}
                                address={court.adress}
                                description={court.description}
                                name={court.name}
                                phones={court.phones}
                                type={court.type}
                                imageUrl={court.image ? require('./' + court.image) : ''}
                            />
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default connect(state => ({
    courts: state.courts.courts,
}), {
    getCourts,
})(AppCourts);