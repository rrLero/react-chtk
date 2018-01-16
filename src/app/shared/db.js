// @flow
import {baseURL} from "./baseurl";

export class Db {

    constructor() {}

    static listCourts() {
        return fetch(`${baseURL}api/courts`)
    }
    static listNews() {
        return fetch(`${baseURL}api/news`)
    }

}
