// @flow

export class Application{
    _name: string;
    _logo: string;
    _url: string;
    _id: string;

    constructor(name: string, logo: string, id: string, url: string){
        this._name = name;
        this._logo = logo;
        this._url = url;
        this._id = id;
    }

    getName(){
        return this._name;
    }

    getLogo(){
        return this._logo;
    }

    getId() {
        return this._id;
    }

    getUrl(){
        return this._url;
    }
}