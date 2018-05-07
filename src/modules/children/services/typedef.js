// @flow

export type ScheduleGoogleItem = {
    kind: string,
    etag: string,
    id: string,
    status: string,
    updated: string,
    start: {
        dateTime: number
    },
    end: {
        dateTime: number
    },
    visibility: string,
    iCalUID: string,
    summary: string,
    court?: number
};

export type ScheduleGoogle = {
    kind: string,
    etag: string,
    summary: string,
    updated: string,
    timeZone: string,
    accessRole: string,
    defaultReminders: Array<string>,
    nextSyncToken: string,
    items: Array<ScheduleGoogleItem>
};

