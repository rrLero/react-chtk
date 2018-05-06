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
    name: string,
    [string]: number
};

export type ResponseSchedule = {
    _id: {
        $oid: string
    },
    time: string,
    courts: Array<Array<string>>
};

export type ResponseDataRating = {
    name: string,
    id: string,
    year: number,
    coachId: string,
    avatarUrl: string,
    points: string
};

export type ResponseCoach = {
    _id: {
        $oid: string
    },
    name: string,
    lastName: string,
    year: number,
    avatarUrl: string
};
