// @flow
import './styles.less';
import React from 'react';

type Props = {};

const Partners = ({}: Props) => {
    return (
        <article id="partners" className="partners">
            <h1 className="partners__title">Наши партнеры</h1>
            <h4 className="partners__sub-title">Ми благодарны нашим партнерам за поддержку</h4>
            <div className="partners__list">
                <a target="_blank" href="http://www.babolat.ua/" name="babolat-site" rel="noopener">
                    <img src={require('./babolat.png')} className="partners__image" alt="babolat-logo"/>
                </a>
                <a target="_blank" href="http://laska.ua/" name="laska-site" rel="noopener">
                    <img src={require('./logo-laska.png')} className="partners__image" alt="laska-logo"/>
                </a>
            </div>
        </article>
    )
};

export default Partners;