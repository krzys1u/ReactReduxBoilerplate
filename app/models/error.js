// @flow

export class Error{
    _code: number;
    _message: string;
    _title: string;


    constructor(message: string, title: string, code?: number){
        this._message = message;
        this._title = title;
        if (code){
            this._code = code;
        }
    }

    getCode(){
        return this._code;
    }

    getMessage(){
        return this._message;
    }

    getTitle(){
        return this._title;
    }
}