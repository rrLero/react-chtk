// @flow
import './styles.less';
import React from 'react';

type Props = {};

const Partners = ({}: Props) => {
    return (
        <article id="partners" className="partners">
            <h1 className="partners__title">Наши партнеры</h1>
            <h4 className="partners__sub-title">Ми благодарны нашим партнерам за поддержку</h4>
            <a target="_blank" href="http://www.babolat.ua/" name="babolat-site" rel="noopener">
                <img src={require('./Babolat-Logo.jpg')} className="partners__image" alt="jet-brains-logo"/>
            </a>
        </article>
    )
};

export default Partners;