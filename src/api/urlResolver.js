// @flow

const apiKey = () => process.env.API_KEY;
const apiRoot = () => 'https://api.mlab.com/api/1/databases/chtk/collections/';
export default (url: string, extraParams: {}) => {
    const params = {...extraParams, apiKey: apiKey()};
    return `${apiRoot()}${url}?${Object.entries(params).map(([key, value]) => `${key}=${String(value)}`).join('&')}`;
};

const apiRGoogle = () => 'https://www.googleapis.com/calendar/v3/calendars/travers13@ukr.net/';
const apiKeyGoogle = () => process.env.API_KEY_GOOGLE;
export const googleUrlResolver = (url: string, extraParams: {}) => {
    const params = {...extraParams, key: apiKeyGoogle()};
    return `${apiRGoogle()}${url}?${Object.entries(params).map(([key, value]) => `${key}=${String(value)}`).join('&')}`;
};
