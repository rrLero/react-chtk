// @flow

export type ResponsePlayers = {
    _id: {
        $oid: string
    },
    name: string,
    lastName: string,
    coach: {
        id: string
    },
    year: number,
    avatarUrl: string
};

export type ResponseTour = {
    _id: {
        $oid: string
    },
    date: string,
    [string]: string
};
