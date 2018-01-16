// @flow
export type Props = {};

export type StateNews = {
    news: Array<Object>,
    arrayClasses: Array<string>,
    currentNew: {
        title: string,
        date: string,
        text: string,
        image: string
    }
};

export type StateHeader = {
    toggle: boolean,
    classHidden: string
};

export type StateCourts = {
    courts: Array<{ [key: string]: string }>
};