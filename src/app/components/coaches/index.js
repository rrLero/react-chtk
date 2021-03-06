// @flow
import './styles.less';
import React from 'react';
import Coach from '../coach';

type Props = {className: string};

const Coaches = ({className}: Props) => {
    return (
        <ul className={className + " coaches"}>
            <Coach
                name={'Геннадий'}
                image={'gena.jpg'}
                className={'coaches__coach'}
                tel={'(067) 470 76 76'}
            />
            <Coach
                name={'Алексей'}
                image={'aleksey.jpg'}
                className={'coaches__coach'}
                tel={'(093) 500 38 00'}
            />
            <Coach
                name={'Юлия'}
                image={'yulia.jpg'}
                className={'coaches__coach'}
                tel={'(050) 016 37 68'}
            />

        </ul>
    )
};

export default Coaches;