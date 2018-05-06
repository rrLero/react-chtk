// @flow

export type Data = {
    _id: {
        $oid: string
    },
    date: string,
    name: string,
    [id: string]: number
};