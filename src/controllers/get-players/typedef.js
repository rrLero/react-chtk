// @flow

export type Data = {
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